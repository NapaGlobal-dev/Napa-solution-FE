import Document, { Html, Head, Main, NextScript } from 'next/document'
import React, { Fragment } from 'react';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage

        ctx.renderPage = () =>
            originalRenderPage({
                // useful for wrapping the whole react tree
                enhanceApp: (WrappedComponent) => (props) => <WrappedComponent {...props} />
            })

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render() {
        return (
            <Html lang='pt-BR' dir='ltr' lang='en' class='notranslate' translate='no'>
                <Head>
                    <meta charSet='utf-8' />
                    <meta name='google' content='notranslate' />
                    <meta
                        name='viewport'
                        content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
                    />
                    <meta
                        name='viewport'
                        content='width=device-width, initial-scale=1'
                    ></meta>

                    {/* bootrap cdn */}
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossorigin="anonymous">
                    </link>

                    <script
                        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                        crossorigin="anonymous">
                    </script>

                    <script
                        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                        crossorigin="anonymous">
                    </script>
                    <script
                        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                        crossorigin="anonymous">
                    </script>
                </Head>
                <body>
                    <div id='wrapper'>
                        <Main />
                        <NextScript />
                    </div>
                </body>
<<<<<<< HEAD
            </Html>
=======
            </html>
>>>>>>> 36b0641b5f29523f6ea680a0c1d00a8a80df82a2
        )
    }
}
export default MyDocument