// pages/_app.js
import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/halcyon_favicon_clean.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
