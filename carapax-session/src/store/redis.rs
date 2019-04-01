use crate::{session::SessionKey, store::SessionStore};
use failure::Error;
use futures::{future::err, Future};
use redis::{r#async::SharedConnection, Client, Cmd, FromRedisValue};
use serde::{de::DeserializeOwned, Serialize};

/// Redis powered session store
///
/// Serialization and deserialization of input/output values implemented using serde_json
#[derive(Clone)]
pub struct RedisSessionStore {
    conn: SharedConnection,
    namespace: String,
}

impl RedisSessionStore {
    /// Use this method to create a new store
    ///
    /// # Arguments
    ///
    /// - params - Redis URL (`redis://[:<passwd>@]<hostname>[:port][/<db>]`)
    /// - namespace - A prefix string for keys
    pub fn open<P: AsRef<str>, N: Into<String>>(
        params: P,
        namespace: N,
    ) -> impl Future<Item = RedisSessionStore, Error = Error> {
        futures::future::result(Client::open(params.as_ref()))
            .from_err()
            .and_then(|client| {
                client
                    .get_shared_async_connection()
                    .from_err()
                    .map(|conn| RedisSessionStore {
                        conn,
                        namespace: namespace.into(),
                    })
            })
    }

    fn format_key(&self, key: SessionKey) -> String {
        format!("{}-{}", self.namespace, key.to_string())
    }

    fn query<V>(&self, cmd: Cmd) -> Box<Future<Item = V, Error = Error> + Send>
    where
        V: FromRedisValue + Send + 'static,
    {
        Box::new(cmd.query_async(self.conn.clone()).from_err().map(|(_conn, v)| v))
    }
}

impl SessionStore for RedisSessionStore {
    fn get<O>(&self, key: SessionKey) -> Box<Future<Item = Option<O>, Error = Error> + Send>
    where
        O: DeserializeOwned + Send + 'static,
    {
        let mut cmd = redis::cmd("GET");
        cmd.arg(self.format_key(key));
        Box::new(self.query::<Option<String>>(cmd).and_then(|val| {
            Ok(match val {
                Some(val) => serde_json::from_str(&val)?,
                None => None,
            })
        }))
    }

    fn set<I>(&self, key: SessionKey, val: &I) -> Box<Future<Item = (), Error = Error> + Send>
    where
        I: Serialize,
    {
        match serde_json::to_string(val) {
            Ok(val) => {
                let mut cmd = redis::cmd("SET");
                cmd.arg(self.format_key(key));
                cmd.arg(val);
                self.query(cmd)
            }
            Err(e) => Box::new(err(e.into())),
        }
    }

    fn expire(&self, key: SessionKey, seconds: usize) -> Box<Future<Item = (), Error = Error> + Send> {
        let mut cmd = redis::cmd("EXPIRE");
        cmd.arg(self.format_key(key));
        cmd.arg(seconds);
        self.query(cmd)
    }

    fn del(&self, key: SessionKey) -> Box<Future<Item = (), Error = Error> + Send> {
        let mut cmd = redis::cmd("DEL");
        cmd.arg(self.format_key(key));
        self.query(cmd)
    }
}
