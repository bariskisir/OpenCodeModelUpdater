import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://api.cortecs.ai/v1/models",
  baseURL: "https://api.cortecs.ai/v1",
  envKey: "CORTECS_API_KEY",
  providerKey: "cortecs-auto-generated",
  providerName: "Cortecs AI Auto Generated",
  urlMatcher: "api.cortecs.ai",
});
