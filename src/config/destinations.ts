import { siteConfig } from "./siteConfig";

const ETH_ADDRESS = /^0x[a-fA-F0-9]{40}$/;

export function isEthAddress(value: string): boolean {
  return ETH_ADDRESS.test(value.trim());
}

/** Accept only absolute https URLs. Blank and placeholder tokens stay pending. */
export function httpsUrl(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed || trimmed.startsWith("[")) return null;
  try {
    const url = new URL(trimmed);
    if (url.protocol !== "https:") return null;
    return url.toString();
  } catch {
    return null;
  }
}

export function contractAddress(): string | null {
  const value = siteConfig.contractAddress.trim();
  return isEthAddress(value) ? value : null;
}

export function tokenomicsText(): string {
  const value = siteConfig.tokenomics.trim();
  return value || siteConfig.messages.tokenomicsPending;
}

export function contactText(): string {
  const value = siteConfig.projectContact.trim();
  return value || siteConfig.messages.contactPending;
}

export function dexHref(): string | null {
  return httpsUrl(siteConfig.dexLink);
}

export function chartHref(): string | null {
  return httpsUrl(siteConfig.chartLink);
}

export function xHref(): string | null {
  return httpsUrl(siteConfig.officialXUrl);
}

export function telegramHref(): string | null {
  return httpsUrl(siteConfig.officialTelegramUrl);
}
