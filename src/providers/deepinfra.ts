import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://api.deepinfra.com/v1/models",
  baseURL: "https://api.deepinfra.com/v1",
  envKey: "DEEPINFRA_API_KEY",
  providerKey: "deep-infra",
  providerName: "Deep Infra",
  urlMatcher: "deepinfra.com",
});
