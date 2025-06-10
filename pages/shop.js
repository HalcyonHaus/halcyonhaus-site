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

      {/* Header */}
      <main className="flex flex-col items-center justify-center py-20 px-6">
        <h1
  className="text-2xl md:text-4xl font-light tracking-wider text-center"
  style={{ fontFamily: "'Playfair Display', serif" }}
        >
        SHOP MY HOME
       </h1>
        <a
          href="https://www.shopltk.com/explore/halcyonhaus"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base md:text-lg underline hover:text-gray-600 transition"
        >
          View my LTK page
        </a>
      </main>
    </div>
  );
}
