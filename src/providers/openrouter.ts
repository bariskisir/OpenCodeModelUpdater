import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://openrouter.ai/api/frontend/models",
  baseURL: "https://openrouter.ai/api/v1",
  envKey: "OPENROUTER_API_KEY",
  providerKey: "openrouter-auto-generated",
  providerName: "OpenRouter Auto Generated",
  urlMatcher: "openrouter.ai",
  modelIdField: "slug",
  modelNameField: "short_name",
});
