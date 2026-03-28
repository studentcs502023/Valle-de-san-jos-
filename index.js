import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI("TU_API_KEY_AQUÍ");

async function ejecutar() {
  const model = genAI.getGenerativeModel({ model: "gemini-3.1-pro-preview" });
  const prompt = "Hola Gemini, ¿estás funcionando correctamente?";

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
}

ejecutar();