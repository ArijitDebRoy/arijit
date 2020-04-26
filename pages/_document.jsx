import Document, { Head, Main, NextScript } from 'next/document'
import React from "react";

const APP_NAME = "Arijit's Portfolio";
const APP_TITLE = "Portfolio of Arijit Deb Roy";
const APP_URL = "https://arijit.arijitdebroy.now.sh/";
const APP_DESCRIPTION = "I'm a full stack developer and machine learning enthusiast. Love anything about JS ❤️ || MERN stack || PHP || GraphQL || WebSocket";

export default class extends Document {
    static async getInitialProps(ctx) {
        return await Document.getInitialProps(ctx)
    }

    render() {
        return (
            <html lang='en' dir='ltr'>
                <Head nonce="ADR4321">
                    <meta charSet="utf-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta httpEquiv="Pragma" content="no-cache"/>
                    <meta httpEquiv="Expires" content="-1"/>
                    <meta name='application-name' content={APP_NAME} />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content={APP_TITLE} />
                    <meta name='description' content={APP_DESCRIPTION} />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='theme-color' content='#1a202c' />
                    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
                    <meta name='twitter:card' content={APP_NAME} />
                    <meta name='twitter:url' content={APP_URL} />
                    <meta name='twitter:title' content={APP_TITLE} />
                    <meta name='twitter:description' content={APP_DESCRIPTION} />
                    <meta name='twitter:image' content='/images/favicon/ms-icon-310x310.png' />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content={APP_TITLE} />
                    <meta property='og:description' content={APP_DESCRIPTION} />
                    <meta property='og:site_name' content={APP_NAME} />
                    <meta property='og:url' content={APP_URL} />
                    <meta property='og:image' content='/images/favicon/ms-icon-310x310.png' />
                    <meta property="og:image:width" content="365" />
                    <meta property="og:image:height" content="365" />
                    <meta property="og:image:alt" content="Site Logo" />
                    <meta name="msapplication-TileColor" content="#1a202c"/>
                    <meta name="msapplication-TileImage" content="/images/favicon/ms-icon-144x144.png"/>
                    <meta name='msapplication-config' content='/browserconfig.xml' />

                    <link rel='manifest' href='/manifest.json' />

                    <link rel="shortcut icon" href="/images/favicon/favicon.ico" type="image/x-icon" />
                    <link rel="icon" type="image/x-icon" href="/images/favicon/favicon.ico" />

                    <link rel="apple-touch-icon" sizes="57x57" href="/images/favicon/apple-icon-57x57.png"/>
                    <link rel="apple-touch-icon" sizes="60x60" href="/images/favicon/apple-icon-60x60.png"/>
                    <link rel="apple-touch-icon" sizes="72x72" href="/images/favicon/apple-icon-72x72.png"/>
                    <link rel="apple-touch-icon" sizes="76x76" href="/images/favicon/apple-icon-76x76.png"/>
                    <link rel="apple-touch-icon" sizes="114x114" href="/images/favicon/apple-icon-114x114.png"/>
                    <link rel="apple-touch-icon" sizes="120x120" href="/images/favicon/apple-icon-120x120.png"/>
                    <link rel="apple-touch-icon" sizes="144x144" href="/images/favicon/apple-icon-144x144.png"/>
                    <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon/apple-icon-152x152.png"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>

                    <link rel="icon" type="image/png" sizes="192x192"  href="/images/favicon/android-icon-192x192.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon/favicon-96x96.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>
                </Head>
                <body>
                    <Main />
                    <NextScript nonce="ADR4321"/>
                </body>
            </html>
        )
    }
}
