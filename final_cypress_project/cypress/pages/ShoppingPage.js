class ShoppingPage {
  visit() {
    cy.visit("/index.php?rt=product/category&path=58");
  }

  selectFirstProduct() {
    cy.get(".productlist .col-md-3").first().click();
  }

  addToCart() {
    cy.get("a[title='Add to Cart']").click();
  }
}

module.exports = new ShoppingPage();
