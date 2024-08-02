import { type Locator, type Page } from '@playwright/test';

export class Registration {
  private readonly page: Page;
  private readonly locators: { [key: string]: Locator };

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      firstName: page.locator('#customer.firstName'),
      lastName: page.locator('#customer.lastName'),
      address: page.locator('#customer.address.street'),
      city: page.locator('#customer.address.city'),
      state: page.locator('#customer.address.state'),
      zipCode: page.locator('#customer.address.zipCode'),
      phone: page.locator('#customer.phoneNumber'),
      ssn: page.locator('#customer.ssn'),
      username: page.locator('#customer.username'),
      password: page.locator('#customer.password'),
      passwordConfirm: page.locator('#repeatedPassword'),
    };
  }

  private async fillInput(locator: Locator, value: string) {
    await locator.fill(value);
  }

  public async fillRegistrationForm(data: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber: number;
    ssn: number;
    username: string;
    password: string;
    passwordConfirm: string;
  }) {
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
    await this.fillInput(this.locators.zipCode, zipCode);
    await this.fillInput(this.locators.phone, String(phoneNumber));
    await this.fillInput(this.locators.ssn, String(ssn));
    await this.fillInput(this.locators.username, username);
    await this.fillInput(this.locators.password, password);
    await this.fillInput(this.locators.passwordConfirm, passwordConfirm);
  }
}
