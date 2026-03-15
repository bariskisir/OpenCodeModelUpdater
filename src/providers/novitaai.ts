import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://api.novita.ai/openai/models",
  baseURL: "https://api.novita.ai/openai",
  envKey: "NOVITAAI_API_KEY",
  providerKey: "novitaai-auto-generated",
  providerName: "Novita AI Auto Generated",
  urlMatcher: "api.novita.ai",
});
