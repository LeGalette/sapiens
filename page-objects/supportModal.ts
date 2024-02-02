import { Locator, Page } from "@playwright/test";

export class SupportModal {

    readonly page: Page
    readonly autoMode: Locator
    readonly next: Locator
    readonly okButton: Locator
    readonly testAreaReadingFluencyButton: Locator
    readonly mondayButton: Locator
    readonly tuesdayButton: Locator
    readonly wednesdayButton: Locator
    readonly class3D: Locator
    readonly student1:Locator
    readonly taskStepperModal: Locator
    readonly success: Locator

    constructor(page: Page){
        this.page = page
        this.autoMode = page.getByRole('button', { name: 'Auto Modus (Beta) LaLeTu legt' })
        this.next = page.getByRole('button', { name: 'Weiter' })
        this.okButton = page.getByRole('button', { name: 'OK' })
        this.testAreaReadingFluencyButton = page.getByRole('button', { name: 'Leseflüssigkeit Lautleseü' })
        this.mondayButton = page.locator('mat-chip-option').filter({ hasText: 'Mo' })
        this.tuesdayButton = page.locator('mat-chip-option').filter({ hasText: 'Di' })
        this.wednesdayButton = page.locator('mat-chip-option').filter({ hasText: 'Mi' })
        this.class3D = page.getByRole('button', { name: '3D - 23/24 Ausgewählt 0/3' })
        this.student1 = page.locator('mat-list-option').first()
        this.taskStepperModal = page.locator('.training-task-stepper-col')
        this.success = page.getByRole('heading', { name: 'Aufgabe erfolgreich erstellt' })
    }

    async clickAutoMode(){
        await this.autoMode.click()
    }

    async clickNext(){
        await this.next.click()
    }

    async confirmInfoModal(){
        await this.okButton.click()
    }
    
    async clickTestAreaReadingFluency(){
        await this.testAreaReadingFluencyButton.click()
    }
    
    async clickMonday(){
        await this.mondayButton.click()
    }    

    async clickTuesday(){
        await this.tuesdayButton.click()
    }

    async clickWednesday(){
        await this.wednesdayButton.click()
    }

    async selectClass3D(){
        await this.class3D.click()
    }

    async selectFirstStudent(){
        await this.student1.click()
    }

    async successIsDisplayed(){
        await this.success.waitFor({ state: 'visible' });
    }

    async waitForModalClose(){
        await this.taskStepperModal.waitFor({ state: 'hidden' })
    }

}