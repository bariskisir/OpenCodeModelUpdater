import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://api.intelligence.io.solutions/api/v1/models",
  baseURL: "https://api.intelligence.io.solutions/api/v1",
  envKey: "IONET_API_KEY",
  providerKey: "ionet-auto-generated",
  providerName: "IO.NET Auto Generated",
  urlMatcher: "api.intelligence.io.solutions",
});
