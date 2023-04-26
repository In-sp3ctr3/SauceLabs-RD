const assert = require('assert');
const LoginPage = require('../pageobjects/loginPage');
const FooterPage = require('../pageobjects/footerPage');

describe('Footer Links', () => {
  before(async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
  });

  it('should verify the Twitter link', async () => {
    await FooterPage.footerContainer.waitForExist();
    await FooterPage.verifyTwitterLink();
  });

  it('should verify the Facebook link', async () => {
    await FooterPage.footerContainer.waitForExist();
    await FooterPage.verifyFacebookLink();
  });

  it('should verify the LinkedIn link', async () => {
    await FooterPage.footerContainer.waitForExist();
    await FooterPage.verifyLinkedInLink();
  });
});