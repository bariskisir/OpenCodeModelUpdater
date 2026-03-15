import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://api.synthetic.new/v1/models",
  baseURL: "https://api.synthetic.new/v1",
  envKey: "SYNTHETIC_API_KEY",
  providerKey: "synthetic-auto-generated",
  providerName: "Synthetic AI Auto Generated",
  urlMatcher: "api.synthetic.new",
});
