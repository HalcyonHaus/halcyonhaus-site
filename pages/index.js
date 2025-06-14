 import Head from "next/head";
-import DesignBotChat from "../components/DesignBotChat";
+import ChatBubble from "../components/ChatBubble";

 export default function Home() {
   return (
     <>
       <Head>
         <title>Halcyon Haus</title>
       </Head>
       <main className="min-h-screen">
         {/* Your existing content here… */}
-
-        {/* Inline chat for testing */}
-        {/* <section className="w-full max-w-md mx-auto p-8">
-          <h2 className="text-2xl font-semibold mb-4">Chat with Halcyon Haus</h2>
-          <DesignBotChat />
-        </section> */}
+        {/* Your page’s real content… */}

+        {/* Floating chat bubble */}
+        <ChatBubble />
       </main>
     </>
   );
 }
