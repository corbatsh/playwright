import { type Locator, type Page } from '@playwright/test';

export class AccountOverview {
  readonly page: Page;
  readonly header: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.getByRole('heading', {
      name: ' Accounts Overview ',
      level: 1,
    });
  }
}
