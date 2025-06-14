// pages/_app.js
import Head from "next/head";
import "../styles/globals.css";
import ChatBubble from "../components/ChatBubble";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* You can keep any global <Head> tags here if you like */}
      <Head>
        {/* e.g. your site-wide meta tags, favicons, etc. */}
      </Head>

      {/* Render the active page */}
      <Component {...pageProps} />

      {/* Floating chat bubble on every page */}
      <ChatBubble />
    </>
  );
}
