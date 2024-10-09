import {expect, test} from "@playwright/test"

test.describe('playwright locators',async () => {
    
    test.beforeEach("goto Forms page", async ({page}) => {
        await page.goto("http://localhost:4200/");
        await page.getByText("Forms").click();
        await page.getByText("Form Layouts").click();
    });
    
    // test("Locators syntax", async ({page}) => {
    //     // access by tag
    //     page.locator("input")

    //     // access by id
    //     page.locator("#input-email");

    //     //access by class
    //     page.locator('.shape-rectangle');

    //     //access by attribute
    //     page.locator('[placeholder="Email"]')

    //     //access by full class
    //     page.locator('class="input-full-width size-medium status-basic shape-rectangle nb-transition"');

    //     //combine different selector
    //     page.locator('input[placeholder="Email"][npinput]');

    //     //access by partial text match
    //     page.locator(':text("Using")')

    //     //access by full text match
    //     page.locator(':text-is=("Using the Grid))')
        
    // });

    test("user facing locators", async ({page}) => {
        await page.getByRole('textbox', { name: "email" }).first().fill("chmusman");
        await page.getByRole('textbox', { name: "password" }).first().fill("123");
        await page.getByRole('button', {name: 'Sign in'}).first().click();

        // await page.getByLabel('Option 1').first().click();
        await page.getByPlaceholder('Jane Doe').fill('Usman')
    });

    test("locating child elements",async ({page}) => {
        await page.locator('nb-card nb-radio :text-is("Option 1")').click();
       
        await page.locator('nb-card').getByRole('button', {name: 'Sign in'}).first().click();
        
    });

    test("locating parent element", async ({page}) => {
        await page.locator('nb-card', { hasText: 'Using the Grid'}).getByRole('button', {name: 'Sign in'}).click();
        await page.locator('nb-card', {has: page.getByText("Basic form")}).getByRole('textbox', {name: 'email'}).fill('chmusman88@gmail.com')
        await page.locator('nb-card').filter({ hasText: "Basic form" }).getByRole('textbox', {name: 'email'}).fill('chmusman88@gmail.com')
    });

    test("reusing locators", async ({page}) => {
        const basicForm =  page.locator('nb-card', {has: page.getByText("Basic form")});
        await basicForm.getByRole('textbox', {name: 'email'}).fill('chmusman88@gmail.com');
        await basicForm.getByRole('textbox', {name: 'password'}).fill('12345');
        await basicForm.locator('.custom-checkbox').check();
        await basicForm.getByRole('button').click();

    });

    test("assertions", async ({page}) => {
       //General assertions
       const a = 5;
       const b = 10;
       expect(a + b).toEqual(15);
    
       
       const basicForm = page.locator('nb-card', {has: page.getByText("Basic form")});
       const text = await basicForm.locator('button').textContent();
       expect(text).toEqual("Submit");

       //Locator assertions
       const emailInput = basicForm.getByRole('textbox', { name: "email" });
       await expect(emailInput).toHaveId('exampleInputEmail1');

       //soft assertion
       expect.soft(basicForm).toContainText('Submit');
    });

});
