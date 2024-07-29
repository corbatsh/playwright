import { test, expect } from '@playwright/test';
import { Homepage } from '../support/pages/homepage.page';
import { invalidLoginData, loginData } from '../fixtures/login';
import { AccountOverview } from '../support/pages/accountOverview.page';

test.describe('login', () => {
  let homepage: Homepage;

  test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page);
    await homepage.goto();
  });

  test('Verify invalid login data error', async () => {
    await homepage.login(invalidLoginData.username, invalidLoginData.password);
    await expect(homepage.errorMessage).toBeVisible();
  });

  test('Verify login into account', async ({ page }) => {
    const accountOverview = new AccountOverview(page);
    await homepage.login(loginData.username, loginData.password);
    await expect(accountOverview.header).toBeVisible();
  });
});
