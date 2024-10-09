import {test, Page} from '@playwright/test'

test("goto Form Layouts",async ({page}) => {
    await page.goto("http://localhost:4200/");
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();
})