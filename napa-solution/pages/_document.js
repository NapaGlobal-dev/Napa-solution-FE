import Document, { Html, Head, Main, NextScript } from "next/document";
import React, { Fragment } from "react";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: (WrappedComponent) => (props) =>
          <WrappedComponent {...props} />,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="pt-BR" dir="ltr" lang="en" class="notranslate" translate="no">
        <Head>
          <meta charSet="utf-8" />
          <meta name="google" content="notranslate" />
          <meta
            name="viewport"
            content="initial-scale=1, width=device-width, user-scalable=no, target-densitydpi=device-dpi"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>

          {/* bootrap cdn */}
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          ></link>
          <link href="https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Hina+Mincho&family=New+Tegomin&display=swap" rel="stylesheet"></link>
          <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
          ></script>

          <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
          ></script>
          <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
          ></script>
          {/* editor api */}
          <script src="https://cdn.tiny.cloud/1/kgoz83g4pa9hf3ty6rf30954qbxxsi2k222f9b3fdpmhhonu/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
        {/* google map api  */}
          <script
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDauj3g7HyE202aDRkrUUBzcbCkcrK_CQg&libraries=&v=weekly`}
          async
          ></script>
          <script
          src="https://kit.fontawesome.com/c6253efcfe.js"
          crossorigin="anonymous"
          ></script>
        </Head>
        <body>
          <div id="wrapper">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}
export default MyDocument;
