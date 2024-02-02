import { Locator, Page } from "@playwright/test";

export class AnalysisModal {

    readonly page: Page
    readonly cookieBannerAcceptAll: Locator

    constructor(page: Page){
        this.page = page
        this.cookieBannerAcceptAll = page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll')
    }

    async closeCookieBanner(){
        await this.cookieBannerAcceptAll.click()
    }

}