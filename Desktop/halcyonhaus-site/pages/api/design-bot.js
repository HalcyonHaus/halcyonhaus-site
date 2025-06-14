import OpenAI from "openai";

// Instantiate the new v4 SDK with your API key:
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { messages } = req.body;
  try {
    // Create the chat completion
    const response = await openai.chat.completions.create({
      model: process.env.NEXT_PUBLIC_OPENAI_MODEL,
      messages,
    });
    // Return the full response JSON
    return res.status(200).json(response);
  } catch (error) {
    console.error("OpenAI error:", error);
    // Expose the real message for debugging
    return res.status(500).json({ error: error.error?.message || error.message });
  }
}
