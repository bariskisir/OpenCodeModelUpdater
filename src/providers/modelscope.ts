import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://api-inference.modelscope.cn/v1/models",
  baseURL: "https://api-inference.modelscope.cn/v1",
  envKey: "MODELSCOPE_API_KEY",
  providerKey: "modelscope-auto-generated",
  providerName: "ModelScope Auto Generated",
  urlMatcher: "api-inference.modelscope.cn",
});
