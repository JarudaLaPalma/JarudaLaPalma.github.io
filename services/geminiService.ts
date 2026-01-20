import { GoogleGenAI } from "@google/genai";
import { WishRequest } from '../types';

// Initialize the Gemini AI client
// NOTE: In a real production app, you should proxy requests through a backend 
// to avoid exposing the API key if not using a limited scope key.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateWeddingWish = async (request: WishRequest): Promise<string> => {
  try {
    const prompt = `
      Actúa como un invitado a una boda escribiendo una dedicatoria para el libro de visitas.
      
      Pareja: ${request.coupleNames}
      Relación con la pareja: ${request.relationship}
      Tono deseado: ${request.tone}
      
      Escribe un mensaje corto (máximo 50 palabras), cálido y adecuado para una tarjeta de boda.
      Solo devuelve el texto del mensaje, nada más.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-latest',
      contents: prompt,
    });

    return response.text || "¡Felicidades a los novios!";
  } catch (error) {
    console.error("Error generating wish:", error);
    return "Lo siento, no pude inspirarme en este momento. ¡Pero felicidades!";
  }
};
