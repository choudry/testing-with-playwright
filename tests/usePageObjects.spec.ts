import {test} from "@playwright/test";
import { PageObjectManager } from "../page-objects/PageObjectManager";

test.describe("page object models",async () => {
   
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:4200/");
    });

    test("navigate to page",async ({page}) => {
        const pom = new PageObjectManager(page)
        await pom.navigateTo().gotoFormLayout();
        await pom.navigateTo().gotoDatepicker();
        await pom.navigateTo().gotoDialog()
        await pom.navigateTo().gotoWindow();
        await pom.navigateTo().gotoTooltip();
    });

    test("parametarized method",async ({page}) => {
        const pom = new PageObjectManager(page);
        await pom.navigateTo().gotoFormLayout();

    //    const formLayoutPage = new FormLayoutPage(page);
       await pom.onFormLayoutPage().submitUsingTheGridFormWithCredentials("test@test.com", "12345", "Option 2");
       await pom.onFormLayoutPage().submitBasicFormWithCredentials("test@test.com", "12345", true);
    });

    test("parametarized method for datapicker",async ({page}) => {
        // const navigateTo = new NavigationPage(page); - manage form page object manager

        const pom = new PageObjectManager(page);
        await pom.navigateTo().gotoDatepicker();
        // const datePickerPage = new DatePickerPage(page);
        await pom.onDatePickerPage().selectCommonDatepickerDateFromToday(5)
    })
});