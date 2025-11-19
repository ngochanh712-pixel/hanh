import { GoogleGenAI } from "@google/genai";

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client && process.env.API_KEY) {
    client = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return client;
};

export const getHistoricalContext = async (question: string, answer: string): Promise<string> => {
  const ai = getClient();
  if (!ai) {
    return "Chức năng AI chưa được cấu hình (thiếu API Key).";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Bạn là một chuyên gia lịch sử Việt Nam. Hãy giải thích ngắn gọn (dưới 80 từ) về sự kiện lịch sử này cho học sinh tiểu học:
      
      Câu hỏi: ${question}
      Đáp án đúng: ${answer}
      
      Hãy giải thích tại sao đáp án này đúng và ý nghĩa của nó.`,
    });
    
    return response.text || "Không thể tải thông tin chi tiết.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Đang gặp sự cố kết nối với sử quán AI.";
  }
};