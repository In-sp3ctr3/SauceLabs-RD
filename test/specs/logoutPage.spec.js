const assert = require('assert');
const LoginPage = require('../pageobjects/loginPage');
const LogoutPage = require('../pageobjects/logoutPage');

describe('Login and Logout', () => {
  before(async () => {
    await LoginPage.open();
  });

  it('should login successfully', async () => {
    await LoginPage.login('standard_user', 'secret_sauce');
    await LoginPage.verifyLoggedIn();
  });

  it('should logout successfully', async () => {
    await LogoutPage.logout();
    await LoginPage.verifyLoggedOut();
  });
});