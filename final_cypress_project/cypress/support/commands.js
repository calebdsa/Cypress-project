// ***********************************************
// Custom Commands
// ***********************************************

/**
 * Custom command to login user
 * @example cy.login('username', 'password')
 */
Cypress.Commands.add('login', (loginname, password) => {
  cy.visit('/index.php?rt=account/login');
  cy.get('#loginFrm_loginname').type(loginname);
  cy.get('#loginFrm_password').type(password);
  cy.get("button[title='Login']").click();
});

/**
 * Custom command to wait for element and assert visibility
 * @example cy.waitAndAssertVisible('.my-selector')
 */
Cypress.Commands.add('waitAndAssertVisible', (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('be.visible');
});

/**
 * Custom command to clear and type text
 * @example cy.clearAndType('#input', 'text')
 */
Cypress.Commands.add('clearAndType', (selector, text) => {
  cy.get(selector).clear().type(text);
});

/**
 * Custom command to select dropdown option by text
 * @example cy.selectDropdownOption('#dropdown', 'Option Text')
 */
Cypress.Commands.add('selectDropdownOption', (selector, optionText) => {
  cy.get(selector).select(optionText);
});

/**
 * Custom command to verify URL contains text
 * @example cy.urlShouldContain('account')
 */
Cypress.Commands.add('urlShouldContain', (text) => {
  cy.url().should('include', text);
});

/**
 * Custom command to take screenshot with timestamp
 * @example cy.takeTimestampedScreenshot('test-name')
 */
Cypress.Commands.add('takeTimestampedScreenshot', (name) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  cy.screenshot(`${name}-${timestamp}`);
});

/**
 * Custom command to wait for page load
 */
Cypress.Commands.add('waitForPageLoad', () => {
  cy.document().should('have.property', 'readyState', 'complete');
});

/**
 * Custom command to handle uncaught exceptions
 */
Cypress.Commands.add('ignoreUncaughtException', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
});
