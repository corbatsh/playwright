import { type Locator } from '@playwright/test';

export async function fillInput(
  locator: Locator,
  value: string,
): Promise<void> {
  await locator.fill(value);
}

export async function getTextContent(locator: Locator): Promise<string> {
  return (await locator.textContent()) ?? '';
}
