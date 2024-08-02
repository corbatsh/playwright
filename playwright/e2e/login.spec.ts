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
    await homepage.login({
      username: invalidLoginData.username,
      password: invalidLoginData.password,
    });
    const errorMessage = await homepage.getErrorMessage();
    expect(errorMessage).toContain('Invalid username or password');
  });

  test('Verify login into account', async ({ page }) => {
    const accountOverview = new AccountOverview(page);
    await homepage.login({
      username: loginData.username,
      password: loginData.password,
    });
    await expect(accountOverview.header).toBeVisible();
  });
});
