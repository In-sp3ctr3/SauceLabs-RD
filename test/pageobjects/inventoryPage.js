const assert = require('assert')

class InventoryPage {
    get inventoryContainer() { return $('#inventory_container'); }
    get sortDropdown() { return $('.product_sort_container'); }
    get sortOptionAtoZ() { return $('//option[@value="az"]'); }
    get sortOptionZtoA() { return $('//option[@value="za"]'); }
    get sortOptionLowToHigh() { return $('//option[@value="lohi"]'); }
    get sortOptionHighToLow() { return $('//option[@value="hilo"]'); }
    get itemAddToCartButton() { return $('.btn_primary.btn_inventory'); }
    get itemRemoveButton() { return $('.btn_secondary.btn_inventory'); }
    get checkoutButton() { return $('.btn_action.checkout_button'); }
    get shoppingCartBadge() { return $('.shopping_cart_badge'); }
    get shoppingCartButton() { return $('.shopping_cart_link'); }
  
    async verifyTitle() {
      const title = await browser.getTitle();
      assert.strictEqual(title, 'Swag Labs');
    }
  
    async verifyItemsDisplayed(itemNames) {
      for (const itemName of itemNames) {
        const item = await browser.$(`//div[text()="${itemName}"]`);
        await item.waitForDisplayed();
      }
    }
  
    async addItemToCart(itemName) {
      const item = await browser.$(`//div[text()="${itemName}"]/ancestor::div[@class="inventory_item"]`);
      const addToCartButton = await item.$('.btn_primary.btn_inventory');
      await addToCartButton.click();
    }
  
    async removeItemFromCart(itemName) {
      const item = await browser.$(`//div[text()="${itemName}"]/ancestor::div[@class="inventory_item"]`);
      const removeButton = await item.$('.btn_secondary.btn_inventory');
      await removeButton.click();
    }
  
    async sortItemsByAtoZ() {
      await this.sortDropdown.waitForExist();
      await this.sortDropdown.click();
      await this.sortOptionAtoZ.waitForExist();
      await this.sortOptionAtoZ.click();
    }
  
    async sortItemsByZtoA() {
      await this.sortDropdown.waitForExist();
      await this.sortDropdown.click();
      await this.sortOptionZtoA.waitForExist();
      await this.sortOptionZtoA.click();
    }
  
    async sortItemsByLowToHigh() {
      await this.sortDropdown.waitForExist();
      await this.sortDropdown.click();
      await this.sortOptionLowToHigh.waitForExist();
      await this.sortOptionLowToHigh.click();
    }
  
    async sortItemsByHighToLow() {
      await this.sortDropdown.waitForExist();
      await this.sortDropdown.click();
      await this.sortOptionHighToLow.waitForExist();
      await this.sortOptionHighToLow.click();
    }
  
    async getShoppingCartCount() {
      await this.shoppingCartBadge.waitForExist();
      return await this.shoppingCartBadge.getText();
    }
  
    async clickCheckoutButton() {
      await this.checkoutButton.waitForExist();
      await this.checkoutButton.click();
    }

    async clickShoppingCartButton() {
        await this.shoppingCartButton.waitForExist();
        await this.shoppingCartButton.click();
        }

  }
  
  module.exports = new InventoryPage();