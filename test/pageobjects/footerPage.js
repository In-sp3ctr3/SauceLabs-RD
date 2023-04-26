const assert = require('assert');
class FooterPage {
    get footerContainer() { return $('footer'); }
    get twitterLink() { return $('//a[text()="Twitter"]'); }
    get facebookLink() { return $('//a[text()="Facebook"]'); }
    get linkedInLink() { return $('//a[text()="LinkedIn"]'); }
  
    async verifyTwitterLink() {
      const href = await this.twitterLink.getAttribute('href');
      assert.strictEqual(href, 'https://twitter.com/saucelabs');
    }
  
    async verifyFacebookLink() {
      const href = await this.facebookLink.getAttribute('href');
      assert.strictEqual(href, 'https://www.facebook.com/saucelabs');
    }
  
    async verifyLinkedInLink() {
      const href = await this.linkedInLink.getAttribute('href');
      assert.strictEqual(href, 'https://www.linkedin.com/company/sauce-labs/');
    }
  }
  
  module.exports = new FooterPage();