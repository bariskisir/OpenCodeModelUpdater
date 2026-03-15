import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://zenmux.ai/api/v1/models",
  baseURL: "https://zenmux.ai/api/v1",
  envKey: "ZENMUX_API_KEY",
  providerKey: "zenmux-auto-generated",
  providerName: "Zenmux Auto Generated",
  urlMatcher: "zenmux.ai",
});
