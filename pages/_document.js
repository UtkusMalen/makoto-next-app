import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="Minecraft — ванильный сервер по Майнкрафт, который ты так долго искал. Никаких приватов и  телепортов, всё как в одиночной игре."
          />
          <meta
            name="keywords"
            content="Майнкрафт,  ванильный сервер, сервер майнкратф, minecraft, minecraft server, лицензионный сервер майнкрафт, makoto"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="Russian" />
          <meta name="reply-to" content="solodovnikov.toni@gmail.com" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="/safari-pinned-tab.svg"
            color="#5bbad5"></link>
          <meta name="theme-color" content="#111" />
          <meta name="msapplication-TileColor" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
