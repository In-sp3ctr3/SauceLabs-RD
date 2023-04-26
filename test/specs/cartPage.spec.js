const assert = require('assert');
const LoginPage = require('../pageobjects/loginPage');
const InventoryPage = require('../pageobjects/inventoryPage');
const CartPage = require('../pageobjects/cartPage');

describe('Cart Page', () => {
  before(async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
  });

  it('should allow the user to add and remove items from the cart', async () => {
    // Add two items to the shopping cart
    await InventoryPage.addItemToCart('Sauce Labs Backpack');
    assert.strictEqual(await InventoryPage.getShoppingCartCount(), '1');
    await InventoryPage.addItemToCart('Sauce Labs Bolt T-Shirt');
    assert.strictEqual(await InventoryPage.getShoppingCartCount(), '2');

    // Navigate to the cart page and verify that the items are displayed
    await InventoryPage.clickShoppingCartButton();
    await CartPage.verifyUrl();
    const cartItemNames = ['Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt'];
    await CartPage.verifyCartItems(cartItemNames);

    // Remove an item from the cart
    await CartPage.clickRemoveButton('Sauce Labs Backpack');
    assert.strictEqual(await InventoryPage.getShoppingCartCount(), '1');
    // Navigate back to the inventory page and verify that the remaining item is still in the cart
    await CartPage.clickContinueShoppingButton();
    assert.strictEqual(await InventoryPage.getShoppingCartCount(), '1');
    await InventoryPage.clickShoppingCartButton();
    await CartPage.verifyUrl();
    const remainingCartItemNames = ['Sauce Labs Bolt T-Shirt'];
    await CartPage.verifyCartItems(remainingCartItemNames);
  });

});