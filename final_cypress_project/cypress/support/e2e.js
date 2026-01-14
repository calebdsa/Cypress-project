// ***********************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************

// Import commands.js
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Handle uncaught exceptions (optional - uncomment if needed)
// Cypress.on('uncaught:exception', (err, runnable) => {
//   // returning false here prevents Cypress from failing the test
//   return false;
// });

// Global before hook
before(() => {
  // Any setup that needs to happen before all tests
});

// Global beforeEach hook
beforeEach(() => {
  // Any setup that needs to happen before each test
});

// Global after hook
after(() => {
  // Any cleanup that needs to happen after all tests
});

// Global afterEach hook
afterEach(() => {
  // Any cleanup that needs to happen after each test
});