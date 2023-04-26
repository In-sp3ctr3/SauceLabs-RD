class LoginPage {
    get usernameInput() {
      return $('#user-name')
    }
  
    get passwordInput() {
      return $('#password')
    }
  
    get loginButton() {
      return $('input[type="submit"]')
    }
  
    get errorButton() {
      return $('h3[data-test="error"]')
    }
  
    async open() {
      await browser.url('https://www.saucedemo.com/')
    }
  
    async login(username, password) {
      await this.usernameInput.waitForExist()
      await this.usernameInput.setValue(username)
      await this.passwordInput.setValue(password)
      await this.loginButton.click()
    }
  
    async waitForPageTitle() {
      const pageTitle = $('.title')
      await pageTitle.waitForExist()
      return pageTitle
    }
  
    async waitForErrorMessage() {
      const errorButton = this.errorButton
      await errorButton.waitForExist()
      return errorButton
    }
    async verifyLoggedIn() {
        await browser.waitUntil(async () => (await browser.getUrl()).includes('/inventory.html'), {timeout: 5000});
        const url = await browser.getUrl();
        return url === 'https://www.saucedemo.com/inventory.html';
      }
    
      async verifyLoggedOut() {
        // check page is home page
        const url = await browser.getUrl();
        return url === 'https://www.saucedemo.com/';
      }
  }
  
  module.exports = new LoginPage();