const BasePage = require('../support/base/BasePage');

class ShoppingPage extends BasePage {
  // Selectors
  selectors = {
    productList: '.productlist .col-md-3',
    productItem: '.productlist .col-md-3',
    addToCartButton: "a[title='Add to Cart']",
    cartButton: '.cart',
    productName: '.name',
    productPrice: '.price',
    quantityInput: '#product_quantity',
  };

  /**
   * Visit shopping/category page
   * @param {string} categoryPath - Category path parameter
   */
  visit(categoryPath = '58') {
    super.visit(`/index.php?rt=product/category&path=${categoryPath}`);
    return this;
  }

  /**
   * Select product by index
   * @param {number} index - Product index (0-based)
   */
  selectProduct(index = 0) {
    this.getElement(this.selectors.productItem).eq(index).click();
    return this;
  }

  /**
   * Select first product
   */
  selectFirstProduct() {
    return this.selectProduct(0);
  }

  /**
   * Add product to cart
   */
  addToCart() {
    this.clickElement(this.selectors.addToCartButton);
    return this;
  }

  /**
   * Set product quantity
   * @param {number} quantity - Quantity to set
   */
  setQuantity(quantity) {
    this.typeText(this.selectors.quantityInput, quantity.toString());
    return this;
  }

  /**
   * Get product name
   */
  getProductName() {
    return this.getElement(this.selectors.productName);
  }

  /**
   * Get product price
   */
  getProductPrice() {
    return this.getElement(this.selectors.productPrice);
  }

  /**
   * Verify product is in cart
   */
  verifyProductInCart() {
    this.urlShouldContain('checkout/cart');
    return this;
  }
}

module.exports = ShoppingPage;
