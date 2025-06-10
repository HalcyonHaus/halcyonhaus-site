import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

export default function ShopPage() {
  useEffect(() => {
    // Only run script if not already loaded
    if (!document.getElementById("ltk-widget-script")) {
      const script = document.createElement("script");
      script.id = "ltk-widget-script";
      script.src = "https://widgets-static.rewardstyle.com/widgets2_0/client/pub/ltkwidget/ltkwidget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Head>
        <title>Shop My Home – Halcyon Haus</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Navigation */}
      <header className="absolute top-0 right-0 z-20 p-6 text-sm tracking-widest">
        <nav className="space-x-6 uppercase font-inter">
          <Link href="/" passHref legacyBehavior>
            <a className="hover:underline">Home</a>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <a className="hover:underline">About Me</a>
          </Link>
          <Link href="/projects" passHref legacyBehavior>
            <a className="hover:underline">Projects</a>
          </Link>
          <Link href="/shop" passHref legacyBehavior>
            <a className="hover:underline">Shop My Home</a>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6 py-24 text-center">
        <h1
          className="text-xl md:text-4xl font-light tracking-wider mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          SHOP MY HOME
        </h1>

        {/* LTK Embed */}
        <div
          id="ltkwidget-version-two39037103"
          data-appid="39037103"
          className="ltkwidget-version-two"
        >
          <div
            widget-dashboard-settings=""
            data-appid="39037103"
            data-userid="452262"
            data-rows="4"
            data-cols="3"
            data-showframe="false"
            data-padding="4"
            data-profileid="bcf42a60-68cf-11ec-8066-7899888eea18"
          >
            <div className="rs-ltkwidget-container">
              <div data-ui-view=""></div>
            </div>
          </div>
          <noscript>
            This content requires JavaScript to be enabled.
          </noscript>
        </div>
      </main>
    </div>
  );
}
