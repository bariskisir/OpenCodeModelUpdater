import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://moark.com/v1/models",
  baseURL: "https://moark.com/v1",
  envKey: "MOARK_API_KEY",
  providerKey: "moark-auto-generated",
  providerName: "Moark Auto Generated",
  urlMatcher: "moark.com",
});
