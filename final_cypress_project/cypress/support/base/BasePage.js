/**
 * Base Page Object class
 * Provides common functionality for all page objects
 */
class BasePage {
  /**
   * Visit the page
   * @param {string} path - Relative path to append to baseUrl
   */
  visit(path = '') {
    cy.visit(path);
    return this;
  }

  /**
   * Get element by selector with optional timeout
   * @param {string} selector - CSS selector
   * @param {number} timeout - Timeout in milliseconds
   */
  getElement(selector, timeout = Cypress.config('defaultCommandTimeout')) {
    return cy.get(selector, { timeout });
  }

  /**
   * Click element with retry logic
   * @param {string} selector - CSS selector
   */
  clickElement(selector) {
    return this.getElement(selector).click({ force: true });
  }

  /**
   * Type into element
   * @param {string} selector - CSS selector
   * @param {string} text - Text to type
   */
  typeText(selector, text) {
    return this.getElement(selector).clear().type(text);
  }

  /**
   * Wait for element to be visible
   * @param {string} selector - CSS selector
   */
  waitForElement(selector) {
    return this.getElement(selector).should('be.visible');
  }

  /**
   * Get page title
   */
  getTitle() {
    return cy.title();
  }

  /**
   * Get URL
   */
  getUrl() {
    return cy.url();
  }

  /**
   * Assert URL contains text
   * @param {string} text - Text to check in URL
   */
  urlShouldContain(text) {
    this.getUrl().should('include', text);
    return this;
  }

  /**
   * Take screenshot
   * @param {string} name - Screenshot name
   */
  takeScreenshot(name) {
    cy.screenshot(name);
    return this;
  }

  /**
   * Wait for page to load
   */
  waitForPageLoad() {
    cy.document().should('have.property', 'readyState', 'complete');
    return this;
  }
}

module.exports = BasePage;
