// pages/_app.js
import Head from "next/head";
import "../styles/globals.css";
import ChatBubble from "../components/ChatBubble";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Global <head> tags (fonts, meta, favicons, etc.) */}
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Example: load your site fonts once for all pages */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
        {/* Add any other global meta or link tags here */}
      </Head>

      {/* Render the current page component */}
      <Component {...pageProps} />

      {/* Chat bubble always floats on every page */}
      <ChatBubble />

      {/* Vercel Analytics */}
      <Analytics />
    </>
  );
}
