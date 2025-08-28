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
       {/* Favicon */}
   {/* Favicon */}
 {/* SVG favicon for most modern browsers */}
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  
  {/* PNG fallbacks for Safari, older Chrome, etc. */}
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  
  {/* Optional Apple icon */}
  <link rel="apple-touch-icon" href="/favicon-180x180.png" />
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
