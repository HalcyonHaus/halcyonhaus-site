import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans">
      <Head>
        <title>Halcyon Haus | California Cool Interior Design</title>
      </Head>
      <section className="text-center mt-20">
        <h1 className="text-5xl font-bold">Halcyon Haus</h1>
        <p className="mt-4 text-lg">California interiors that are deeply personal, effortlessly curated, and full of soul.</p>
        <div className="mt-6">
          <Link href="https://www.instagram.com/halcyonhaus_/">Follow on Instagram</Link>
        </div>
      </section>
    </main>
  );
}
