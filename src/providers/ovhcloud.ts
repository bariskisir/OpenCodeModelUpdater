import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/models",
  baseURL: "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
  envKey: "OVHCLOUD_API_KEY",
  providerKey: "ovhcloud-auto-generated",
  providerName: "OVH Cloud Auto Generated",
  urlMatcher: "oai.endpoints.kepler.ai.cloud.ovh.net",
});
