import { Page } from "@playwright/test";
import { NavigationPage } from '../page-objects/NavigationPage';
import { FormLayoutPage } from '../page-objects/FormLayoutPage';
import { DatePickerPage } from "../page-objects/DatePickerPage";

export class PageObjectManager {
    private readonly page: Page;

    private readonly navigationPage: NavigationPage;
    private readonly formLayoutPage: FormLayoutPage;
    private readonly datePickerPage: DatePickerPage;

    constructor(page: Page) {
        this.page = page;

        this.navigationPage = new NavigationPage(this.page);
        this.formLayoutPage = new FormLayoutPage(this.page);
        this.datePickerPage = new DatePickerPage(this.page);
    }

    navigateTo() {
        return this.navigationPage;
    }

    onFormLayoutPage() {
        return this.formLayoutPage;
    }

    onDatePickerPage() {
        return this.datePickerPage;
    }
}