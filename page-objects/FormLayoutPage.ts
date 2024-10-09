import { Page } from "@playwright/test";

export class FormLayoutPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async submitUsingTheGridFormWithCredentials (email: string, password: string, optionText: string) {
        const basicForm =  this.page.locator('nb-card', {has: this.page.getByText("Using the grid")});
        await basicForm.getByRole('textbox', {name: 'email'}).fill(email);
        await basicForm.getByRole('textbox', {name: 'password'}).fill(password);
        await basicForm.getByLabel(optionText).click({force: true});
        await basicForm.getByRole('button').click();
        
    }

    /**
     * sign in to basic form using email and password
     * @param email - email to sign in
     * @param password - password to sign in
     * @param rememberMe - true or false if user credentials should be saved
     */
    async submitBasicFormWithCredentials(email: string, password: string, rememberMe: boolean) {
        const basicForm =  this.page.locator('nb-card', {has: this.page.getByText("Basic form")});
        await basicForm.getByRole('textbox', {name: 'email'}).fill(email);
        await basicForm.getByRole('textbox', {name: 'password'}).fill(password);
        if (rememberMe) {
            await basicForm.getByRole('checkbox').click({force: true});
        }
        await basicForm.getByRole('button').click();
    }
}