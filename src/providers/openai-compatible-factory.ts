import { ProviderHandler, ProviderFetchResult, OpenCodeConfig } from "../types";

export interface OpenAICompatibleProviderConfig {
  apiUrl: string;
  baseURL: string;
  envKey: string;
  providerKey: string;
  providerName: string;
  urlMatcher?: string;
  modelIdField?: string;
  modelNameField?: string;
}

interface OpenAIModel {
  id?: string;
  slug?: string;
  [key: string]: unknown;
}

interface OpenAIApiResponse {
  data: OpenAIModel[];
  [key: string]: unknown;
}

function getNestedValue(
  obj: Record<string, unknown>,
  path: string
): unknown {
  return path.split(".").reduce((current, key) => {
    if (typeof current === "object" && current !== null) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj as unknown);
}

export function createOpenAICompatibleProvider(
  config: OpenAICompatibleProviderConfig
): ProviderHandler {
  const envKeyPlaceholder = `{env:${config.envKey}}`;
  const urlMatcher = config.urlMatcher || config.baseURL;
  const modelIdField = config.modelIdField || "id";
  const modelNameField = config.modelNameField || modelIdField;

  function extractApiKey(configObj: OpenCodeConfig): string {
    for (const provider of Object.values(configObj.provider || {})) {
      const url = provider.options?.baseURL || "";
      if (url.includes(urlMatcher) && provider.options?.apiKey) {
        const key = provider.options.apiKey;
        if (typeof key === "string" && key.length > 0) {
          return key;
        }
      }
    }
    return envKeyPlaceholder;
  }

  async function fetchModels(): Promise<ProviderFetchResult> {
    const response = await fetch(config.apiUrl);
    if (!response.ok) {
      throw new Error(
        `${config.providerName} API returned ${response.status}: ${response.statusText}`
      );
    }

    const json = (await response.json()) as OpenAIApiResponse;
    const models: Record<string, { name: string }> = {};

    for (const model of json.data) {
      const modelId = String(model[modelIdField] || model.id || "");
      const modelName = String(
        getNestedValue(model as Record<string, unknown>, modelNameField) ||
          modelId ||
          ""
      );

      if (modelId) {
        models[modelId] = { name: modelName };
      }
    }

    return {
      providerKey: config.providerKey,
      provider: {
        name: config.providerName,
        options: {
          baseURL: config.baseURL,
          apiKey: "",
        },
        models,
      },
    };
  }

  const handler: ProviderHandler = {
    name: config.providerName,
    providerKey: config.providerKey,
    baseURL: config.baseURL,
    fetch: fetchModels,
    extractApiKey,
  };

  return handler;
}
