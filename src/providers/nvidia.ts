import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://integrate.api.nvidia.com/v1/models",
  baseURL: "https://integrate.api.nvidia.com/v1",
  envKey: "NVIDIA_API_KEY",
  providerKey: "nvidia-auto-generated",
  providerName: "Nvidia Auto Generated",
  urlMatcher: "nvidia.com",
});
