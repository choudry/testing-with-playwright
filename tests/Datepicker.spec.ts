import {test} from "@playwright/test";
import { PageObjectManager } from "../page-objects/PageObjectManager";

test.describe("Select date from datepciker",async () => {
    let pom: PageObjectManager;

    test.beforeAll(async ({page}) => {
        pom = new PageObjectManager(page)
    });

    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:4200/");
    });

    test("Select the date from common datepicker",async ({page}) => {
        await pom.navigateTo().gotoDatepicker();
        await pom.onDatePickerPage().selectCommonDatepickerDateFromToday(5)
    })
});