import { Locator, Page } from "@playwright/test";

export class SideBar {

    readonly page: Page
    readonly createTasks: Locator
    readonly support: Locator

    constructor(page: Page){
        this.page = page
        this.createTasks = page.getByRole('button', { name: 'Aufgabe erstellen' })
        this.support = page.getByRole('menuitem', { name: 'Förderung' })
    
    }

    async clickCreateTask(){
        await this.createTasks.click()
    }

    async clickSupport(){
        await this.support.click()
    }
}