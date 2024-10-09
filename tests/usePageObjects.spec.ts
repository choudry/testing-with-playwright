import {test} from "@playwright/test";
import { NavigationPage } from '../page-objects/NavigationPage';
import { FormLayoutPage } from '../page-objects/FormLayoutPage';
import { DatePickerPage } from "../page-objects/DatePickerPage";

test.describe("page object models",async () => {
   
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:4200/");
    });

    test("navigate to page",async ({page}) => {
        const navigateTo = new NavigationPage(page);
        await navigateTo.gotoFormLayout();
        await navigateTo.gotoDatepicker();
        await navigateTo.gotoDialog()
        await navigateTo.gotoWindow();
        await navigateTo.gotoTooltip();
    });

    test("parametarized method",async ({page}) => {
        const navigateTo = new NavigationPage(page);
        await navigateTo.gotoFormLayout();

       const formLayoutPage = new FormLayoutPage(page);
       await formLayoutPage.submitUsingTheGridFormWithCredentials("test@test.com", "12345", "Option 2");
       await formLayoutPage.submitBasicFormWithCredentials("test@test.com", "12345", true);
    });

    test("parametarized method for datapicker",async ({page}) => {
        const navigateTo = new NavigationPage(page);
        await navigateTo.gotoDatepicker();
        const datePickerPage = new DatePickerPage(page);
        await datePickerPage.selectCommonDatepickerDateFromToday(5)
    })
});