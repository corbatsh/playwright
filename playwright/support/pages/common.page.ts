import { type Locator } from '@playwright/test';

export const fillInput = async (
  locator: Locator,
  value: string,
): Promise<void> => {
  await locator.fill(value);
};

export async function getTextContent(locator: Locator): Promise<string> {
  return (await locator.textContent()) ?? '';
}
