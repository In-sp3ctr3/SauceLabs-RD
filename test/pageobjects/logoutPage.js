class LogoutPage {
    get menuButton() { return $('#react-burger-menu-btn'); }
    get logoutLink() { return $('//a[text()="Logout"]'); }
  
    async logout() {
      await this.menuButton.click();
      await this.logoutLink.click();
    }
  }
  
  module.exports = new LogoutPage();