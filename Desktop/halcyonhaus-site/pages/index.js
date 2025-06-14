import Head from "next/head";
import DesignBotChat from "../components/DesignBotChat";

export default function Home() {
  return (
    <>
      <Head>
        <title>Halcyon Haus</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center p-8">
        <section className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">
            Chat with Halcyon Haus
          </h2>
          <DesignBotChat />
        </section>
      </main>
    </>
  );
}
