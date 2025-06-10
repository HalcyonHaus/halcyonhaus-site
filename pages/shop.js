import Head from "next/head";
import Link from "next/link";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Head><title>Shop My Home – Halcyon Haus</title></Head>

      <header className="flex justify-end p-6 text-sm tracking-widest">
        <nav className="space-x-6 uppercase font-inter">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About Me</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/shop" className="hover:underline">Shop My Home</Link>
        </nav>
      </header>

      <h1 className="text-[28px] md:text-[30px] font-light tracking-wider text-center uppercase mt-10">
        SHOP MY HOME
      </h1>

      <main className="mt-12 px-4">
        <iframe
          src="https://widgets-static.rewardstyle.com/widgets2_0/client/pub/ltkwidget/embed?appid=669535761&userid=452262&profileid=bcf42a60-68cf-11ec-8066-7899888eea18&cols=3&rows=4"
          width="100%"
          height="900"
          style={{ border: "none", maxWidth: "100%" }}
          loading="lazy"
          title="Shop My Home - LTK"
        />
      </main>
    </div>
  );
}
