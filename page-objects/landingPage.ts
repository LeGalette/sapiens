import { Locator, Page } from "@playwright/test";

export class LandingPage {

    readonly page: Page
    readonly cookieBannerAcceptAll: Locator
    readonly signinMenuButton: Locator
    readonly signinModal: Locator
    readonly loginAsTeacherButton: Locator
    readonly emailInputField: Locator
    readonly passwordInputField: Locator
    readonly submitButton: Locator

    constructor(page: Page){
        this.page = page
        this.cookieBannerAcceptAll = page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll')
        this.signinMenuButton = page.locator('mat-toolbar-row').getByRole('button', { name: 'Anmelden' })
        this.signinModal = page.locator('.home-login-dialog').first()
        this.loginAsTeacherButton = page.locator(':text("Als Schuladmin/ Lehrkraft anmelden")')
        this.emailInputField = page.getByLabel('E-Mail-Adresse *')
        this.passwordInputField = page.getByLabel('Passwort *')
        this.submitButton = page.locator('[type="submit"]')
    }

    async closeCookieBanner(){
        await this.cookieBannerAcceptAll.click()
    }

    async login(email: string, password: string){
        await this.clickAnmeldenButton()
        await this.loginAsTeacherButton.click()
        await this.signinModal.waitFor({ state: 'hidden' })
        await this.emailInputField.fill(email)
        await this.passwordInputField.fill(password)
        await this.submitButton.isEnabled({timeout: 5000})
        await this.submitButton.click()
    }

    private async clickAnmeldenButton(){
        await this.signinMenuButton.click()
        await this.signinModal.waitFor({ state: 'visible' })
    }
    
}