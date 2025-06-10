import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Head>
        <title>Shop My Home – Halcyon Haus</title>
      </Head>

      {/* Navigation */}
      <header className="flex justify-end p-6 text-sm tracking-widest">
        <nav className="space-x-6 uppercase font-inter">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About Me</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/shop" className="hover:underline">Shop My Home</Link>
        </nav>
      </header>

      {/* Page Title */}
      <h1
        className="text-[32px] md:text-[56px] font-bold tracking-wider text-center mt-10"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        SHOP MY HOME
      </h1>

      {/* LTK Widget Embed */}
      <div className="flex justify-center mt-12 px-4">
        <div
          id="ltkwidget-version-two669535761"
          data-appid="669535761"
          className="ltkwidget-version-two w-full max-w-screen-lg"
        >
          <div
            widget-dashboard-settings=""
            data-appid="669535761"
            data-userid="452262"
            data-rows="4"
            data-cols="3"
            data-showframe="false"
            data-padding="4"
            data-profileid="bcf42a60-68cf-11ec-8066-7899888eea18"
          >
            <div className="rs-ltkwidget-container">
              <div ui-view=""></div>
            </div>
          </div>
        </div>
      </div>

      <Script
        src="https://widgets-static.rewardstyle.com/widgets2_0/client/pub/ltkwidget/ltkwidget.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
