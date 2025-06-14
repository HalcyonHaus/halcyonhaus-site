import OpenAI from "openai";

// Instantiate the SDK with your API key
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  // Let GET checks pass without error
  if (req.method === "GET") {
    return res.status(200).json({ status: "ok" });
  }
  // Only allow POST for chat
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body;
  try {
    const response = await openai.chat.completions.create({
      model: process.env.NEXT_PUBLIC_OPENAI_MODEL,
      messages,
    });
    return res.status(200).json(response);
  } catch (error) {
    console.error("OpenAI error:", error);
    return res
      .status(500)
      .json({ error: error.error?.message || error.message });
  }
}
