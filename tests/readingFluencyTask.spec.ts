import {test, chromium, expect} from '@playwright/test'
import {LandingPage} from '../page-objects/landingPage'
import {SideBar} from '../page-objects/sideBar'
import { AnalysisModal } from '../page-objects/analysisModal'
import {SupportModal} from '../page-objects/supportModal'

const email = process.env.EMAIL
const password = process.env.PASSWORD

if (typeof email !== 'string' || typeof password !== 'string') {
    throw new Error("EMAIL or PASSWORD environment variables are not set.");
}

test.beforeEach(async ({page})=>{
    const landingPage = new LandingPage(page)
    await page.goto('/')
    await landingPage.closeCookieBanner()
    await landingPage.login(email, password)
})

test('Create a 3 day reading fluency task for the first student', async ({page}) => {
    const sideBar = new SideBar(page)
    const supportModal = new SupportModal(page)

    await sideBar.clickCreateTask()
    await sideBar.clickSupport()

    await supportModal.clickAutoMode()
    await supportModal.clickNext()
    await supportModal.confirmInfoModal()
    await supportModal.clickTestAreaReadingFluency()
    await supportModal.clickNext()
    await supportModal.clickMonday()
    await supportModal.clickTuesday()
    await supportModal.clickWednesday()
    await supportModal.clickNext()
    await supportModal.selectClass3D()
    await supportModal.selectFirstStudent()
    await supportModal.clickNext()
    await supportModal.successIsDisplayed()
    await supportModal.waitForModalClose()
})