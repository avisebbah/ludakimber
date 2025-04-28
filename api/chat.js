
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send('Only POST method allowed');
  }

  const { message } = req.body;

  const chatResponse = await openai.createChatCompletion({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "אתה לודה, רוקחת דיגיטלית מוסמכת. דברי בצורה מקצועית, רגועה וחמה." },
      { role: "user", content: message },
    ],
  });

  res.status(200).json({ reply: chatResponse.data.choices[0].message.content });
}
