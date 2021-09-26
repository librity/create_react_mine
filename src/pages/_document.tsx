import Document, { Html, Head, Main, NextScript } from 'next/document'

import OGTags from './OGTags'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <OGTags />

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
