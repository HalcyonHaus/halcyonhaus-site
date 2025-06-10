import Head from "next/head";
import Link from "next/link";

export default function ShopPage() {
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
      <header className="flex justify-end p-6 text-sm tracking-widest">
        <nav className="space-x-6 uppercase font-inter">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About Me</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/shop" className="hover:underline">Shop My Home</Link>
        </nav>
      </header>

      {/* Main Section */}
      <main className="px-6 py-7">
        <h1
          className="text-2xl md:text-4xl font-light tracking-wider text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          SHOP MY HOME
        </h1>

        <div className="text-center my-12">
          <a
            href="https://www.shopltk.com/explore/halcyonhaus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 text-sm uppercase tracking-widest border border-black hover:bg-black hover:text-white transition"
          >
            Shop my LTK
          </a>
        </div>

        {/* Instagram Embed */}
        <div className="flex justify-center">
          <iframe
            src="https://snapwidget.com/embed/1099076"
            className="w-full max-w-screen-lg"
            style={{ minHeight: "700px", border: "none", overflow: "hidden" }}
            allowTransparency="true"
            frameBorder="0"
            scrolling="no"
            title="Posts from Instagram"
          ></iframe>
        </div>

        {/* Bottom Spacer */}
        <div className="h-24"></div>
      </main>

      {/* Footer */}
<footer className="mt-16 mb-10 text-center text-sm uppercase tracking-widest font-inter text-gray-500">
  <p className="mb-3">© 2025 Halcyon Haus</p>
  <div className="flex justify-center space-x-6">
    <a
      href="https://www.instagram.com/halcyonhaus_"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-black transition"
      aria-label="Instagram"
    >
      <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zM12 7a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2a3 3 0 1 1-.001 6.001A3 3 0 0 1 12 9zm4.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
      </svg>
    </a>
    <a
      href="https://www.tiktok.com/@halcyonhaus_"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-black transition"
      aria-label="TikTok"
    >
      <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.75 3a6.75 6.75 0 1 0 6.75 6.75v-.117a7.5 7.5 0 0 0 3.75 1.017V8.25a4.5 4.5 0 0 1-3.75-2.022v9.522a4.5 4.5 0 1 1-3.75-4.428V3H9.75z" />
      </svg>
    </a>
    <a
      href="https://www.shopltk.com/explore/halcyonhaus"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-black transition"
      aria-label="LTK"
    >
      <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10a9.98 9.98 0 0 0 6.182-2.11l3.464.49-1.195-3.293A9.961 9.961 0 0 0 22 12c0-5.523-4.477-10-10-10zm1.708 14.5l-.708.708-2.5-2.5 2.5-2.5.708.708L12.207 14H17v1h-4.793l1.501 1.5z" />
      </svg>
    </a>
  </div>
</footer>
  
    </div>
  );
}
