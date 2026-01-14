const ShoppingPage = require('../pages/ShoppingPage');

describe('Shopping Tests', () => {
  let shoppingPage;

  beforeEach(() => {
    shoppingPage = new ShoppingPage();
  });

  it('should navigate to shopping page', () => {
    shoppingPage.visit();
    cy.urlShouldContain('product/category');
  });

  it('should select and view a product', () => {
    shoppingPage.visit().selectFirstProduct();

    // Verify product details page
    cy.urlShouldContain('product/product');
    cy.get('.productname').should('be.visible');
  });

  it('should add product to cart', () => {
    shoppingPage
      .visit()
      .selectFirstProduct()
      .addToCart();

    // Verify product is added to cart
    cy.urlShouldContain('checkout/cart');
    cy.get('.contentpanel').should('be.visible');
  });

  it('should add multiple quantities to cart', () => {
    const quantity = 3;

    shoppingPage
      .visit()
      .selectFirstProduct()
      .setQuantity(quantity)
      .addToCart();

    // Verify quantity in cart
    cy.urlShouldContain('checkout/cart');
    cy.get('.quantity input').should('have.value', quantity.toString());
  });

  it('should navigate through different categories', () => {
    const categories = ['58', '59', '60'];

    categories.forEach((category) => {
      shoppingPage.visit(category);
      cy.urlShouldContain(`path=${category}`);
      cy.get('.productlist').should('be.visible');
    });
  });
});
