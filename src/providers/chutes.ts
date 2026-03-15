import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://llm.chutes.ai/v1/models",
  baseURL: "https://llm.chutes.ai/v1",
  envKey: "CHUTES_API_KEY",
  providerKey: "chutes-auto-generated",
  providerName: "Chutes AI Auto Generated",
  urlMatcher: "llm.chutes.ai",
});
