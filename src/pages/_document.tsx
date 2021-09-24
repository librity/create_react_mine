import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            prefix="og: http://ogp.me/ns#"
            property="og:title"
            content="Create React Mine!"
          />
          <meta
            prefix="og: http://ogp.me/ns#"
            property="og:type"
            content="A blockchain and Proof of Work mining simulator for the brave"
          />
          <meta
            prefix="og: http://ogp.me/ns#"
            property="og:image"
            content="https://create-react-mine.vercel.app/preview.png"
          />
          <meta
            prefix="og: http://ogp.me/ns#"
            property="og:url"
            content="https://create-react-mine.vercel.app/"
          />

          <link rel="shortcut icon" href="favicon.ico" type="image/ico" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
