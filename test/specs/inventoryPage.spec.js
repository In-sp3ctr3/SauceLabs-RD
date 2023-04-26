const assert = require('assert');
const LoginPage = require('../pageobjects/loginPage');
const InventoryPage = require('../pageobjects/inventoryPage');

describe('Inventory Page', () => {
  before(async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
  });

  beforeEach(async () => {
    await InventoryPage.verifyTitle();
  });

  it('should display all items on the inventory page', async () => {
    const itemNames = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)'];
    await InventoryPage.verifyItemsDisplayed(itemNames);
  });

  it('should allow the user to sort items by price (low to high and high to low)', async () => {
    // Sort items by price low to high
    await InventoryPage.sortItemsByLowToHigh();

    // Verify that the items are sorted by price low to high
    const pricesLowToHigh = ['$7.99', '$9.99', '$15.99', '$15.99', '$29.99', '$49.99'];
    for (let i = 0; i < pricesLowToHigh.length; i++) {
        const item = await browser.$(`(//div[@class="inventory_item_price"])[${i + 1}]`);
        assert.strictEqual(await item.getText(), pricesLowToHigh[i]);
    }

    // Sort items by price high to low
    await InventoryPage.sortItemsByHighToLow();

    // Verify that the items are sorted by price high to low
    const pricesHighToLow = ['$49.99', '$29.99', '$15.99', '$15.99', '$9.99', '$7.99'];
    for (let i = 0; i < pricesHighToLow.length; i++) {
      const item = await browser.$(`(//div[@class="inventory_item_price"])[${i + 1}]`);
      assert.strictEqual(await item.getText(), pricesHighToLow[i]);
    }
  });

  it('should allow the user to add and remove items from the shopping cart', async () => {
    // Add an item to the shopping cart
    console.log('Adding item to cart');
    await InventoryPage.addItemToCart('Sauce Labs Backpack');
    assert.strictEqual(await InventoryPage.getShoppingCartCount(), '1');

    // Remove an item from the shopping cart
    await InventoryPage.removeItemFromCart('Sauce Labs Backpack');
    // Ensure that the shopping cart badge is no longer displayed
    assert.strictEqual(await InventoryPage.shoppingCartBadge.isDisplayed(), false);
  });

});