import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://ollama.com/v1/models",
  baseURL: "https://ollama.com/v1",
  envKey: "OLLAMA_CLOUD_API_KEY",
  providerKey: "ollama-cloud-auto-generated",
  providerName: "Ollama Cloud Auto Generated",
  urlMatcher: "ollama.com",
});
