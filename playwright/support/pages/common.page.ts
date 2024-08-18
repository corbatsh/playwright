import { type Locator } from '@playwright/test';

export const fillInput = async (
  locator: Locator,
  value: string,
): Promise<void> => {
  await locator.fill(value);
};

export const getTextContent = async (locator: Locator): Promise<string> => {
  return (await locator.textContent()) ?? '';
};

export const generateUniqueUsername = (baseUsername: string): string => {
  const timestamp = new Date().getTime();
  return `${baseUsername}_${timestamp}`;
};
