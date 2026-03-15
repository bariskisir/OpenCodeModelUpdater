import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://aihubmix.com/v1/models",
  baseURL: "https://aihubmix.com/v1",
  envKey: "AIHUBMIX_API_KEY",
  providerKey: "aihubmix-auto-generated",
  providerName: "AIHubMix Auto Generated",
  urlMatcher: "aihubmix.com",
});
