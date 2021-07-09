/* eslint-disable @next/next/no-page-custom-font */
import 'swiper/swiper-bundle.css';
import '../styles/style.css'
import type { AppProps } from "next/app";
import Head from "next/head";
import { Global, css } from "@emotion/react"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Coffee Store</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Global
        styles={css`
           body{
              margin:0;
              padding:0;
              box-sizing: border-box;
            }
        `}
      />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
