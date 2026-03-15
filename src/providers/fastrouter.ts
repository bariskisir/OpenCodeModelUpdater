import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://go.fastrouter.ai/api/v1/models",
  baseURL: "https://go.fastrouter.ai/api/v1",
  envKey: "FASTROUTER_API_KEY",
  providerKey: "fastrouter-auto-generated",
  providerName: "FastRouter Auto Generated",
  urlMatcher: "go.fastrouter.ai",
});
