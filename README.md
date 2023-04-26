# Sauce Demo Test Automation
This repo contains tests for the Sauce Demo website. The tests are written in JavaScript using the Mocha framework and WebDriverIO for the UI tests.

---

### User Stories
- UI Automation
  - Log into the site
  - Sort the items (Lowest Price sort)
  - Sort the items (Highest Price sort)
  - Add two or more items to the shopping cart
  - Remove cart items
  - Visit the shopping cart
  - Assert that the items that you added are in the cart
  - Remove an item and then continue shopping
  - Logout
  - Checking the Footer Links
---

### Technology
Mocha, WebDriverIO

---

### Functionality
The test functionality includes:
* UI
  * Login
    * User may login with registered and unregistered credentials
  * Inventory/Cart
    * User may sort inventory items
    * User may add items to shopping cart
    * User may remove items from shopping cart
    * User may visit the shopping cart
  * Inventory 
    * User may sort inventory items
    * User may add items to shopping cart
    * User may remove items from shopping cart
  * Logout
    * User may logout
    
---

### UI Structure
//generate tree structure with page objects etc

* __test__
  * __pageobjects__
    * __cartPage.js__
    * __footerPage.js__
    * __inventoryPage.js__
    * __loginPage.js__
    * __logoutPage.js__
  * __specs__
    * __cartPage.spec.js__
    * __footerPage.spec.js__
    * __inventoryPage.spec.js__
    * __loginPage.spec.js__
    * __logoutPage.spec.js__

---

## Local Dev Set Up

Clone the repository to your local computer
```
git clone https://github.com/In-sp3ctr3/SauceLabsRD.git
```

Use the package manager `npm` to install dependencies:
```
npm install
```

Don't forget to audix fixes if needed:
```
npm audit fix
```

Run the UI automation tests:
```
npx wdio wdio.conf.js
```
---

