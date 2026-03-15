import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://router.requesty.ai/v1/models",
  baseURL: "https://router.requesty.ai/v1",
  envKey: "REQUESTY_API_KEY",
  providerKey: "requesty-auto-generated",
  providerName: "Requesty Auto Generated",
  urlMatcher: "router.requesty.ai",
});
