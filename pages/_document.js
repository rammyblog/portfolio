import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
            rel="stylesheet"
          />
          <script
            src="https://kit.fontawesome.com/833e0cadb7.js"
            crossOrigin="anonymous"
          ></script>
          <script src="https://code.iconify.design/1/1.0.6/iconify.min.js"></script>
          <link
            rel="stylesheet"
            href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="./scripts/imagesloaded.pkgd.min.js"></script>
          <script src="./scripts/hammer.min.js"></script>
          <script src="./scripts/sequence.min.js"></script>
          <script src="./scripts/sequence-theme.modern-slide-in.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
