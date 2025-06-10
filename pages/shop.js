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
      <main className="px-6 py-8">
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
    className="w-full max-w-screen-lg min-h-[700px]"
    style={{ border: "none", overflow: "hidden" }}
    allowTransparency="true"
    frameBorder="0"
    scrolling="no"
    title="Posts from Instagram"
  ></iframe>
</div>
      </main>

      {/* Footer */}
      <footer className="mt-8 pb-10 text-center text-xs text-gray-500 uppercase tracking-widest font-inter">
        <p className="mb-2">© {new Date().getFullYear()} Halcyon Haus</p>
        <div className="flex justify-center space-x-6 text-gray-500">
          <a href="https://www.instagram.com/halcyonhaus_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg className="h-4 w-4 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@halcyonhaus" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg className="h-4 w-4 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 3v12a3 3 0 103 3V9c.6.3 1.3.5 2 .5h1V7h-1c-.6 0-1-.4-1-1V3h-4z"/>
            </svg>
          </a>
          <a href="https://www.shopltk.com/explore/halcyonhaus" target="_blank" rel="noopener noreferrer" aria-label="LTK">
            <svg className="h-4 w-4 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm9-6a6 6 0 100 12 6 6 0 000-12z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
