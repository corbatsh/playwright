import { type Locator, type Page } from '@playwright/test';

export class Homepage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('input[type="submit"]');
    this.errorMessage = page.locator('#rightPanel .error');
  }

  async goto() {
    await this.page.goto('/');
  }

  async fillUsernameInput(username: string) {
    await this.usernameInput.fill(username);
  }

  async fillPasswordInput(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async login(username: string, password: string) {
    this.fillUsernameInput(username);
    this.fillPasswordInput(password);
    this.clickLoginButton();
  }
}
