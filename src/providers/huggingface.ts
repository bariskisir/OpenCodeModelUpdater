import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://router.huggingface.co/v1/models",
  baseURL: "https://router.huggingface.co/v1",
  envKey: "HUGGINGFACE_API_KEY",
  providerKey: "huggingface-auto-generated",
  providerName: "Hugging Face Auto Generated",
  urlMatcher: "router.huggingface.co",
});
