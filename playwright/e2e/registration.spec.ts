import { test } from '@playwright/test';
import { Homepage } from '../support/pages/homepage.page';
import {} from '../fixtures/userData';
import { Registration } from '../support/pages/registration.page';
import { registrationData } from '../fixtures/userData';

test.describe('Registration', () => {
  let homepage: Homepage;

  test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page);
    await homepage.goto();
  });

  test('Register new user', async ({ page }) => {
    const registration = new Registration(page);
    await homepage.clickRegisterButton();
    await registration.fillRegistrationForm(registrationData);
    await registration.clickRegisterButton();
  });
});
