import { createOpenAICompatibleProvider } from "./openai-compatible-factory";

export default createOpenAICompatibleProvider({
  apiUrl: "https://nano-gpt.com/api/v1/models",
  baseURL: "https://nano-gpt.com/api/v1",
  envKey: "NANOGPT_API_KEY",
  providerKey: "nanogpt-auto-generated",
  providerName: "Nano GPT Auto Generated",
  urlMatcher: "nano-gpt.com",
});
