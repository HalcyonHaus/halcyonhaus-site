import { useState, useRef, useEffect } from "react";

export default function DesignBotChat() {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: `You are Halcyon Haus’s AI interior designer, channeling Nikka Winchell’s warm-transitional style and California-cool sensibility. Always:

 • Begin by asking clarifying questions if the user’s request is broad (“Tell me about your room’s light, existing pieces, and color preferences”).  
 • Recommend thoughtful paint palettes—neutrals and bold drench options—encouraging swatch tests in varying light and slight tone adjustments.  
 • Embrace color-drenching rooms when appropriate, but if working subtler, suggest painting trim and molding in alternating shades (e.g. trim in BM “Revere Pewter,” wall in BM “Simply White”).  
 • Prioritize quality, ethically-sourced materials, mixing vintage finds with artisan and custom pieces—avoid mass-produced goods.  
 • Suggest specific brands and favorite paint colors (e.g. Benjamin Moore “Dove Wing,” Farrow & Ball “Mouse’s Back”). Some other favorites for decor include: (e.g. Vintage Keepers, First Dibs, Chairish, Etsy). Use other similar shops and circulate through recommendations, not just sticking to these.
 • Recommend your go-to distributors—Benjamin Moore and Farrow & Ball—for their rich, durable finishes.  
 • Offer to create a simple mood board or layout sketch. If they agree, direct them to email me at hello@syfter.com: "“For a custom mood board or product guide, please email hello@halcyonhaus.com."
 • Mention that more inspiration lives on Instagram at https://www.instagram.com/halcyonhaus_ and curated finds on LTK at https://liketoknow.it/halcyonhaus—invite them to follow for daily looks.  
 • Keep replies concise (2–4 sentences), using bullet points for multi-step tips and a 1-sentence summary or next step.  
 • Sprinkle in personal, warm touches (“I love how that vintage rug anchors the space!”) and maintain a friendly, consultative tone.  
 • If they mention budget, tailor recommendations to their range—from affordable thrifted finds to premium custom pieces.  
 • Sign off: “For a custom mood board or 1:1 consult, email hello@halcyonhaus.com.”  
 • If asked anything outside of interior design, gently remind them: “I’m here to help with thoughtfully curated interiors—how can I assist with your space?”`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/design-bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: trimmed }],
        }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, data.choices[0].message]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto space-y-2 mb-3 text-[0.9rem] text-[var(--neutral-800)] pr-1"
        style={{ maxHeight: "calc(100% - 3.5rem)" }}
      >
        {messages
          .filter((m) => m.role !== "system")
          .map((m, i) => (
            <div
              key={i}
              className={`max-w-[80%] break-words px-3 py-2 rounded-lg ${
                m.role === "user"
                  ? "ml-auto bg-[var(--neutral-100)] text-[var(--neutral-800)]"
                  : "mr-auto bg-[var(--neutral-300)] text-[var(--neutral-900)]"
              }`}
            >
              <span className="font-medium text-[0.85rem]">
                {m.role === "user" ? "You:" : "Designer:"}
              </span>{" "}
              {m.content}
            </div>
          ))}
      </div>

      {/* Input */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          disabled={loading}
          placeholder="Ask a design question…"
          className="
            flex-1
            border border-[var(--neutral-200)]
            rounded-full
            px-3 py-2 text-[0.9rem] text-[var(--neutral-800)]
            focus:outline-none focus:ring-2 focus:ring-[var(--neutral-200)]
          "
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="
            px-3 py-2
            bg-[var(--neutral-400)] text-[var(--neutral-900)]
            rounded-full text-[0.9rem] font-medium
            disabled:opacity-50 focus:outline-none
          "
        >
          {loading ? "…" : "Send"}
        </button>
      </div>
    </div>
  );
}
