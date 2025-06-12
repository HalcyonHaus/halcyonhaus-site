import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#fafafa] text-black font-sans text-center px-6">
      <Head>
        <title>404 – Page Not Found</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <h1
        className="text-3xl md:text-4xl tracking-[0.2em] uppercase mb-6"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        404 – Page Not Found
      </h1>

      <p className="text-sm text-gray-700 mb-10 font-inter">
        This page has wandered off. Let’s bring you back where the design flows.
      </p>

      <Link href="/" passHref legacyBehavior>
        <a className="px-6 py-2 text-xs uppercase tracking-widest border border-black rounded-md hover:bg-black hover:text-white transition-colors duration-300 font-inter">
          Return Home
        </a>
      </Link>
    </div>
  );
}
