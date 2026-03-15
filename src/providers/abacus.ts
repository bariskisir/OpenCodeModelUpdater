import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://routellm.abacus.ai/v1/models",
  baseURL: "https://routellm.abacus.ai/v1",
  envKey: "ABACUS_API_KEY",
  providerKey: "abacus-auto-generated",
  providerName: "Abacus Auto Generated",
  urlMatcher: "abacus.ai",
});
