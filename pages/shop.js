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
          className="text-[32px] md:text-[36px] font-bold tracking-wider text-center uppercase"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Shop My Home
        </h1>

        {/* Instagram Embed */}
        <div className="flex justify-center mt-12">
          <iframe
            src="https://snapwidget.com/embed/1099076"
            className="w-full max-w-screen-lg h-[915px] border-none"
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
