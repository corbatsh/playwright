import { type Page, type Locator } from '@playwright/test';
import { fillInput, getTextContent } from './common.page';
import { ILoginData } from '../utils/types';

export class Homepage {
  protected readonly page: Page;
  private readonly locators: { [key: string]: Locator };

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      usernameInput: page.locator('input[name="username"]'),
      passwordInput: page.locator('input[name="password"]'),
      loginButton: page.locator('input[type="submit"]'),
      errorMessage: page.locator('#rightPanel .error'),
      registerButton: page.locator('a[href="register.htm"]'),
    };
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async login({ username, password }: ILoginData): Promise<void> {
    await fillInput(this.locators.usernameInput, username);
    await fillInput(this.locators.passwordInput, password);
    await this.locators.loginButton.click();
  }

  async clickRegisterButton(): Promise<void> {
    await this.locators.registerButton.click();
  }

  async getErrorMessage(): Promise<string> {
    return await getTextContent(this.locators.errorMessage);
  }
}
