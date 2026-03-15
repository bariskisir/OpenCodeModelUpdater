import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://opencode.ai/zen/v1/models",
  baseURL: "https://opencode.ai/zen/v1",
  envKey: "OPENCODE_API_KEY",
  providerKey: "opencode-auto-generated",
  providerName: "OpenCode Zen Auto Generated",
  urlMatcher: "opencode.ai",
});
