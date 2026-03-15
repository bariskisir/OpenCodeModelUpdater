import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://api.inceptionlabs.ai/v1/models",
  baseURL: "https://api.inceptionlabs.ai/v1",
  envKey: "INCEPTION_API_KEY",
  providerKey: "inception-auto-generated",
  providerName: "Inception Labs Auto Generated",
  urlMatcher: "api.inceptionlabs.ai",
});
