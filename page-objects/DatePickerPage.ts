import { Page } from "@playwright/test";

export class DatePickerPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async selectCommonDatepickerDateFromToday(numberofDays: number) {
        //calculate the date
        let date = new Date();
        date.setDate(date.getDate() + numberofDays);
        const expectedDate = date.getDate().toString();
        const expectedShortMonth = date.toLocaleString('En-US', {month: 'short'});
        const expectedFullYear = date.getFullYear();
        const dateToAssert = `${expectedShortMonth} ${expectedDate}, ${expectedFullYear}`;

        const input = this.page.getByPlaceholder('Form Picker');
        await input.fill(dateToAssert)
    }

}