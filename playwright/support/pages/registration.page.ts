import { type Locator, type Page } from '@playwright/test';

export class Registration {
  protected readonly page: Page;
  public locators: { [key: string]: Locator };
  constructor(page: Page) {
    this.page = page;
    this.locators = {
      firstName: page.locator('input[name="customer.firstName"]'),
      lastName: page.locator('input[name="customer.lastName"]'),
      address: page.locator('input[name="customer.address.street"]'),
      city: page.locator('input[name="customer.address.city"]'),
      state: page.locator('input[name="customer.address.state"]'),
      zipCode: page.locator('input[name="customer.address.zipCode"]'),
      phone: page.locator('input[name="customer.phoneNumber"]'),
      ssn: page.locator('input[name="customer.ssn"]'),
      username: page.locator('input[name="customer.username"]'),
      password: page.locator('input[name="customer.password"]'),
      passwordConfirm: page.locator('input[name="repeatedPassword"]'),
      registerButton: page.locator('input[value="Register"]'),
      welcomeMessage: page
        .getByRole('heading', { level: 1 })
        .and(page.locator('.title')),
    };
  }
  private async fillInput(locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
  }

  public async fillRegistrationForm(data: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: number;
    phoneNumber: number;
    ssn: number;
    username: string;
    password: string;
    passwordConfirm: string;
  }): Promise<void> {
    const {
      firstName,
      lastName,
      address,
      city,
      state,
      zipCode,
      phoneNumber,
      ssn,
      username,
      password,
      passwordConfirm,
    } = data;

    await this.fillInput(this.locators.firstName, firstName);
    await this.fillInput(this.locators.lastName, lastName);
    await this.fillInput(this.locators.address, address);
    await this.fillInput(this.locators.city, city);
    await this.fillInput(this.locators.state, state);
    await this.fillInput(this.locators.zipCode, String(zipCode));
    await this.fillInput(this.locators.phone, String(phoneNumber));
    await this.fillInput(this.locators.ssn, String(ssn));
    await this.fillInput(this.locators.username, username);
    await this.fillInput(this.locators.password, password);
    await this.fillInput(this.locators.passwordConfirm, passwordConfirm);
  }

  public async clickRegisterButton(): Promise<void> {
    this.locators.registerButton.click();
  }
}
