import { ProviderHandler } from "../types";
import openrouterHandler from "./openrouter";
import aihubmixHandler from "./aihubmix";
import ollamacloudHandler from "./ollamacloud";
import nvidiaHandler from "./nvidia";
import abacusHandler from "./abacus";

const providers: Record<string, ProviderHandler> = {
  "openrouter": openrouterHandler,
  "aihubmix": aihubmixHandler,
  "ollamacloud": ollamacloudHandler,
  "nvidia": nvidiaHandler,
  "abacus": abacusHandler,
};

export function getProvider(name: string): ProviderHandler | undefined {
  return providers[name];
}

export function getAllProviders(): ProviderHandler[] {
  return Object.values(providers);
}

export function getProviderNames(): string[] {
  return Object.keys(providers);
}

export default providers;
