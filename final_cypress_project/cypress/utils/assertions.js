/**
 * Custom Assertions
 * Reusable assertion utilities
 */

/**
 * Assert element contains text
 */
const assertElementContainsText = (selector, expectedText) => {
  cy.get(selector).should('contain', expectedText);
};

/**
 * Assert element is visible
 */
const assertElementVisible = (selector) => {
  cy.get(selector).should('be.visible');
};

/**
 * Assert element exists
 */
const assertElementExists = (selector) => {
  cy.get(selector).should('exist');
};

/**
 * Assert URL contains text
 */
const assertUrlContains = (text) => {
  cy.url().should('include', text);
};

/**
 * Assert page title
 */
const assertPageTitle = (expectedTitle) => {
  cy.title().should('eq', expectedTitle);
};

module.exports = {
  assertElementContainsText,
  assertElementVisible,
  assertElementExists,
  assertUrlContains,
  assertPageTitle,
};
