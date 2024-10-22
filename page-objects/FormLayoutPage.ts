import { Page } from "@playwright/test";
import { HelperBase } from "./HelperBase";

export class FormLayoutPage extends HelperBase {
  constructor(page: Page) {
    super(page);
  }

  async submitUsingTheGridFormWithCredentials(
    email: string,
    password: string,
    optionText: string
  ) {
    const basicForm = this.page.locator("nb-card", {
      has: this.page.getByText("Using the grid"),
    });
    await basicForm.getByRole("textbox", { name: "email" }).fill(email);
    await basicForm.getByRole("textbox", { name: "password" }).fill(password);
    await basicForm.getByLabel(optionText).click({ force: true });
    await basicForm.getByRole("button").click();
  }
 
  /**
   * 
   * @param name - name of type string
   * @param email - email of type string
   * @param rememberMe - boolean
   */
  async submitInlineForm(name: string, email: string, rememberMe: boolean) {
    const inlineForm = this.page.locator('nb-card').filter({hasText: 'Inline form'});
    await inlineForm.getByPlaceholder('Jane Doe').fill(name);
    await inlineForm.getByPlaceholder('Email').fill(email);
    if (rememberMe) {
        await inlineForm.locator('nb-checkbox').click({force: true});
    }

    await inlineForm.getByRole('button', {name: 'Submit'}).click();
  }

  /**
   * sign in to basic form using email and password
   * @param email - email to sign in
   * @param password - password to sign in
   * @param rememberMe - true or false if user credentials should be saved
   */
  async submitBasicFormWithCredentials(
    email: string,
    password: string,
    rememberMe: boolean
  ) {
    const basicForm = this.page.locator("nb-card", {
      has: this.page.getByText("Basic form"),
    });
    await basicForm.getByRole("textbox", { name: "email" }).fill(email);
    await basicForm.getByRole("textbox", { name: "password" }).fill(password);
    if (rememberMe) {
      await basicForm.getByRole("checkbox").click({ force: true });
    }
    await basicForm.getByRole("button").click();
  }
}
