import {test} from "@playwright/test";
import { PageObjectManager } from "../page-objects/PageObjectManager";

test.describe("Fill out forms",async () => {
    let pom: PageObjectManager;

    test.beforeAll(async ({page}) => {
        pom = new PageObjectManager(page)
    });

    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:4200/");
    });

    test("submit the using the grid form", async ({page}) => {
        await test.step("navigate to form layouts page", async () => {
            await pom.navigateTo().gotoFormLayout();     
        });

       await pom.onFormLayoutPage().submitUsingTheGridFormWithCredentials("test@test.com", "12345", "Option 2");
       await pom.onFormLayoutPage().submitBasicFormWithCredentials("test@test.com", "12345", true);
    });

    test("submit the using the basic form", async ({page}) => {
        await test.step("navigate to form layouts page", async () => {
            await pom.navigateTo().gotoFormLayout();     
        });

       await pom.onFormLayoutPage().submitBasicFormWithCredentials("test@test.com", "12345", true);
    });

    test("submit the using the inline form", async ({page}) => {
        await test.step("navigate to form layouts page", async () => {
            await pom.navigateTo().gotoFormLayout();     
        });

       await pom.onFormLayoutPage().submitBasicFormWithCredentials("Muhammad Usman", "usman@playwright.com", true);
    });

    test("parametarized method for datapicker",async ({page}) => {
        // const navigateTo = new NavigationPage(page); - manage form page object manager

        const pom = new PageObjectManager(page);
        await pom.navigateTo().gotoDatepicker();
        // const datePickerPage = new DatePickerPage(page);
        await pom.onDatePickerPage().selectCommonDatepickerDateFromToday(5)
    })
});