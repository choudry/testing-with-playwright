import {test, Page} from "@playwright/test";
import { group } from "console";
import { HelperBase } from "./helperBase";

export class NavigationPage extends HelperBase{

    constructor(page: Page) {
        super(page);
    }

    async gotoFormLayout() {
        await this.selectGroupMenu("Forms");
        await this.waitForNumberOfSeconds(1) // using method from helper
        await this.page.getByText("Form Layouts").click();
    }

    async gotoDatepicker() {
        await this.selectGroupMenu("Forms");
        await this.page.getByText("Datepicker").click();
    }

    async gotoDialog() {
        await this.selectGroupMenu("Modal & Overlays");
        await this.page.getByText("Dialog").click();
    }

    async gotoWindow() {
        await this.selectGroupMenu("Modal & Overlays");
        await this.page.getByText("Window").click();
    }

    async gotoPopover() {
        await this.selectGroupMenu("Modal & Overlays");
        await this.page.getByText("Popover").click();
    }

    async gotoTooltip() {
        await this.selectGroupMenu("Modal & Overlays");
        await this.page.getByText("Tooltip").click();
    }

    private async selectGroupMenu(groupTitle: string) {
        const groupMenuItem = this.page.getByText(groupTitle);
        const expnadedState = await groupMenuItem.getAttribute("aria-expanded");
        if (!expnadedState) await groupMenuItem.click();

    }
}