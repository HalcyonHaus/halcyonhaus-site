import Head from "next/head";
import ChatBubble from "../components/ChatBubble";

export default function Home() {
  return (
    <>
      <Head>
        <title>Halcyon Haus</title>
      </Head>

      <main className="min-h-screen bg-[var(--bg)]">
        {/* Your existing homepage sections go here… */}

        {/* Floating chat bubble */}
        <ChatBubble />
      </main>
    </>
  );
}
