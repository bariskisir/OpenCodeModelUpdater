import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://api.poe.com/v1/models",
  baseURL: "https://api.poe.com/v1",
  envKey: "POE_API_KEY",
  providerKey: "poe-auto-generated",
  providerName: "Poe Auto Generated",
  urlMatcher: "api.poe.com",
});
