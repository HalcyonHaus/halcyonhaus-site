import Head from "next/head";
import Link from "next/link";

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
      <main className="px-6 py-12">
        <h1
          className="text-[32px] md:text-[56px] font-bold tracking-wider text-center uppercase mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Shop My Home
        </h1>

        {/* LTK Link */}
        <div className="text-center mb-10">
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
            className="w-full max-w-screen-lg h-[610px] border-none"
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
