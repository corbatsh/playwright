import { test, expect } from '@playwright/test';
import { Homepage } from '../support/pages/homepage';
import { AccountOverview } from '../support/pages/accountOverview';
import { invalidLoginData, loginData } from '../support/fixtures/login';

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
