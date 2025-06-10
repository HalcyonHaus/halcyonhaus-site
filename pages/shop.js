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
      <h1
        className="text-[28px] md:text-[48px] font-bold tracking-wider text-center mt-10"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        SHOP MY HOME
      </h1>

      {/* Fallback iframe Embed */}
      <div className="mt-12 px-4">
        <iframe
          src="https://widgets-static.rewardstyle.com/widgets2_0/client/pub/ltkwidget.html?appid=669535761&userid=452262&profileid=bcf42a60-68cf-11ec-8066-7899888eea18&rows=4&cols=3&showframe=false&padding=4"
          width="100%"
          height="800"
          style={{ border: "none", maxWidth: "100%", margin: "auto", display: "block" }}
          loading="lazy"
          title="Shop My Home"
        />
      </div>
    </div>
  );
}
