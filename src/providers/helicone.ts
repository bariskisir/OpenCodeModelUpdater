import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://ai-gateway.helicone.ai/v1/models",
  baseURL: "https://ai-gateway.helicone.ai/v1",
  envKey: "HELICONE_API_KEY",
  providerKey: "helicone-auto-generated",
  providerName: "Helicone Auto Generated",
  urlMatcher: "ai-gateway.helicone.ai",
});
