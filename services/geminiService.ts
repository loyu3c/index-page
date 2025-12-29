
import { GoogleGenAI } from "@google/genai";
import { PROJECTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getProjectInsight = async (query: string) => {
  if (!process.env.API_KEY) return "AI 功能需要 API Key 才能運作。";

  try {
    const context = PROJECTS.map(p => `${p.title}: ${p.description} (URL: ${p.url})`).join('\n');
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `你是一位專業的開發經理助教。
      以下是我的作品列表：
      ${context}
      
      使用者問：${query}
      請根據我的作品，用親切、專業的語氣回答使用者的問題。如果問的是某個作品，請詳細介紹其優勢並給予 URL。`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text || "抱歉，我現在無法提供回答。";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "AI 助手目前暫線，請稍後再試。";
  }
};
