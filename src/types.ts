export interface OpenCodeModel {
  name: string;
}

export interface OpenCodeProviderOptions {
  baseURL: string;
  apiKey: string;
  timeout?: number;
  [key: string]: unknown;
}

export interface OpenCodeProvider {
  npm?: string;
  name: string;
  options: OpenCodeProviderOptions;
  models: Record<string, OpenCodeModel>;
}

export interface OpenCodeConfig {
  $schema?: string;
  small_model?: string;
  provider: Record<string, OpenCodeProvider>;
  [key: string]: unknown;
}

export interface ProviderFetchResult {
  providerKey: string;
  provider: OpenCodeProvider;
}

export interface ProviderHandler {
  name: string;
  providerKey: string;
  baseURL: string;
  fetch(): Promise<ProviderFetchResult>;
  extractApiKey(config: OpenCodeConfig): string;
}
