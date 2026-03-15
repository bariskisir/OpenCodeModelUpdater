import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://api.friendli.ai/serverless/v1/models",
  baseURL: "https://api.friendli.ai/serverless/v1",
  envKey: "FRIENDLI_API_KEY",
  providerKey: "friendli-auto-generated",
  providerName: "Friendli Auto Generated",
  urlMatcher: "api.friendli.ai",
});
