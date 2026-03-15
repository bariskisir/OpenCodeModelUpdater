import { ProviderHandler } from "../types";
import openrouterHandler from "./openrouter";
import aihubmixHandler from "./aihubmix";
import ollamacloudHandler from "./ollamacloud";
import nvidiaHandler from "./nvidia";
import abacusHandler from "./abacus";
import novitaaiHandler from "./novitaai";
import chutesHandler from "./chutes";
import cortecsHandler from "./cortecs";
import moarkHandler from "./moark";
import heliconeHandler from "./helicone";
import huggingfaceHandler from "./huggingface";
import fastrouterHandler from "./fastrouter";
import inceptionHandler from "./inception";
import zenmuxHandler from "./zenmux";
import ovhcloudHandler from "./ovhcloud";
import syntheticHandler from "./synthetic";
import nanogptHandler from "./nanogpt";
import requestyHandler from "./requesty";
import friendliHandler from "./friendli";
import ionetHandler from "./ionet";
import modelscopeHandler from "./modelscope";
import poeHandler from "./poe";
import opencodezenHandler from "./opencodezen";
import deepinfraHandler from "./deepinfra";

const providers: Record<string, ProviderHandler> = {
  "openrouter": openrouterHandler,
  "aihubmix": aihubmixHandler,
  "ollamacloud": ollamacloudHandler,
  "nvidia": nvidiaHandler,
  "abacus": abacusHandler,
  "novita-ai": novitaaiHandler,
  "chutes": chutesHandler,
  "cortecs": cortecsHandler,
  "moark": moarkHandler,
  "helicone": heliconeHandler,
  "huggingface": huggingfaceHandler,
  "fastrouter": fastrouterHandler,
  "inception": inceptionHandler,
  "zenmux": zenmuxHandler,
  "ovhcloud": ovhcloudHandler,
  "synthetic": syntheticHandler,
  "nano-gpt": nanogptHandler,
  "requesty": requestyHandler,
  "friendli": friendliHandler,
  "io-net": ionetHandler,
  "modelscope": modelscopeHandler,
  "poe": poeHandler,
  "opencode-zen": opencodezenHandler,
  "deep-infra": deepinfraHandler,
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
