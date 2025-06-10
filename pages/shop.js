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
      <main className="px-6 py-12">
  <h1
    className="text-2xl md:text-4xl font-light tracking-wider text-center"
    style={{ fontFamily: "'Playfair Display', serif" }}
  >
    SHOP MY HOME
  </h1>
<br><br>
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
        <div className="h-24" />  
      </main>
    </div>
  );
}
