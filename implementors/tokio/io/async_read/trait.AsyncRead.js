(function() {var implementors = {};
implementors["hyper"] = [{"text":"impl <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"hyper/server/conn/struct.AddrStream.html\" title=\"struct hyper::server::conn::AddrStream\">AddrStream</a>","synthetic":false,"types":["hyper::server::tcp::addr_stream::AddrStream"]},{"text":"impl <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"hyper/upgrade/struct.Upgraded.html\" title=\"struct hyper::upgrade::Upgraded\">Upgraded</a>","synthetic":false,"types":["hyper::upgrade::Upgraded"]}];
implementors["hyper_rustls"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"enum\" href=\"hyper_rustls/enum.MaybeHttpsStream.html\" title=\"enum hyper_rustls::MaybeHttpsStream\">MaybeHttpsStream</a>&lt;T&gt;","synthetic":false,"types":["hyper_rustls::stream::MaybeHttpsStream"]}];
implementors["tokio_rustls"] = [{"text":"impl&lt;IO&gt; <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_rustls/client/struct.TlsStream.html\" title=\"struct tokio_rustls::client::TlsStream\">TlsStream</a>&lt;IO&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;IO: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["tokio_rustls::client::TlsStream"]},{"text":"impl&lt;IO&gt; <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_rustls/server/struct.TlsStream.html\" title=\"struct tokio_rustls::server::TlsStream\">TlsStream</a>&lt;IO&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;IO: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["tokio_rustls::server::TlsStream"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"enum\" href=\"tokio_rustls/enum.TlsStream.html\" title=\"enum tokio_rustls::TlsStream\">TlsStream</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["tokio_rustls::TlsStream"]}];
implementors["tokio_socks"] = [{"text":"impl <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_socks/tcp/struct.Socks5Stream.html\" title=\"struct tokio_socks::tcp::Socks5Stream\">Socks5Stream</a>","synthetic":false,"types":["tokio_socks::tcp::Socks5Stream"]}];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()