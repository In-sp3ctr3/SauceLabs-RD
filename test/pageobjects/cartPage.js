const assert = require('assert');
class CartPage {
    get cartContainer() { return $('.cart_list'); }
    get cartItemNames() { return $$('//div[@class="cart_item"]/div[@class="cart_item_label"]/a/div'); }
    get continueShoppingButton() { return $('#continue-shopping'); }

   
    async verifyUrl() {
        const url = await browser.getUrl();
        assert.strictEqual(url, 'https://www.saucedemo.com/cart.html');
    }

    async verifyCartItems(itemNames) {
      for (const itemName of itemNames) {
        const item = await browser.$(`//div[@class="cart_item"]/div[@class="cart_item_label"]/a/div[text()="${itemName}"]`);
        await item.waitForDisplayed();
      }
    }
  
    async clickRemoveButton(itemName) {
        const formattedItemName = itemName.toLowerCase().split(' ').join('-');
        const removeButton = await browser.$(`#remove-${formattedItemName}`);
        await removeButton.click();
    }
  
    async clickContinueShoppingButton() {
      await this.continueShoppingButton.waitForExist();
      await this.continueShoppingButton.click();
    }
  }
  
  module.exports = new CartPage();