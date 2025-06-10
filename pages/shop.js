import Head from "next/head";
import Link from "next/link";

export default function ShopPage() {
  return (
    <div className="min-h-[100vh] bg-white text-black font-sans">
      <Head><title>Shop My Home – Halcyon Haus</title></Head>

      {/* Navigation */}
      <header className="flex justify-end p-6 text-sm tracking-widest">
        <nav className="space-x-6 uppercase font-inter">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About Me</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/shop" className="hover:underline">Shop My Home</Link>
        </nav>
      </header>

      {/* Content — MATCHED SPACING */}
      <main className="px-6 py-24">
        <h1
          className="text-2xl md:text-4xl font-light tracking-wider text-center mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          SHOP MY HOME
        </h1>

        <div className="text-center mb-12">
          <a
            href="https://www.shopltk.com/explore/halcyonhaus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 text-sm uppercase tracking-widest border border-black hover:bg-black hover:text-white transition"
          >
            Shop my LTK
          </a>
        </div>

        {/* Responsive Instagram Embed */}
        <div className="mx-auto max-w-screen-lg aspect-w-16 aspect-h-9">
          <iframe
            src="https://snapwidget.com/embed/1099076"
            className="w-full h-full border-none"
            allowTransparency="true"
            frameBorder="0"
            scrolling="no"
            title="Posts from Instagram"
          ></iframe>
        </div>
      </main>
    </div>
  );
}
