const assert = require('assert')
const LoginPage = require('../pageobjects/loginPage')

describe('Login page', () => {
  beforeEach(async () => {
    // Navigate to login page before each scenario
    await LoginPage.open()
  })

  it('should log in with valid credentials', async () => {
    // Enter valid credentials and verify page title
    await LoginPage.login('standard_user', 'secret_sauce')
    const pageTitle = await LoginPage.waitForPageTitle()
    assert.strictEqual(await pageTitle.getText(), 'Products')
    const productList = await $('div[class="inventory_list"]')
    assert.strictEqual(await productList.isExisting(), true, 'Product list not displayed')
  })

  it('should not log in with invalid credentials', async () => {
    // Enter invalid credentials and verify error message
    await LoginPage.login('invalid_user', 'invalid_password')
    const errorButton = await LoginPage.waitForErrorMessage()
    assert.strictEqual(await errorButton.isDisplayed(), true, 'Error message not displayed')
    // Verify error message text
    assert.strictEqual(await errorButton.getText(), 'Epic sadface: Username and password do not match any user in this service', 'Error message text is incorrect')
})

  it('should not log in with missing credentials', async () => {
    // Attempt to log in without entering credentials and verify error message
    await LoginPage.login('', '')
    const errorButton = await LoginPage.waitForErrorMessage()
    assert.strictEqual(await errorButton.isDisplayed(), true, 'Error message not displayed')
    // Verify error message text
    assert.strictEqual(await errorButton.getText(), 'Epic sadface: Username is required', 'Error message text is incorrect')
  })

  it('should not display error message after navigating away and back', async () => {
    // Enter invalid credentials and navigate to another page
    await LoginPage.login('invalid_user', 'invalid_password')
    await browser.url('https://www.saucedemo.com/inventory.html')
    // Navigate back to login page and verify error message is not displayed
    await LoginPage.open()
    const errorButton = LoginPage.errorButton
    assert.strictEqual(await errorButton.isExisting(), false, 'Error message displayed after navigating away and back')
  })
})