const LoginPage = require('../pages/LoginPage');

describe('Login Tests', () => {
  let loginPage;

  beforeEach(() => {
    loginPage = new LoginPage();
  });

  it('should successfully login with valid credentials', () => {
    cy.fixture('testUsers').then((users) => {
      loginPage
        .visit()
        .login(users.validUser.loginname, users.validUser.password);

      // Verify successful login - adjust selector based on actual page
      cy.urlShouldContain('account/account');
    });
  });

  it('should display error message with invalid credentials', () => {
    cy.fixture('testUsers').then((users) => {
      loginPage
        .visit()
        .login(users.invalidUser.email, users.invalidUser.password);

      // Verify error message is displayed
      loginPage.verifyErrorMessage('Error: Incorrect login or password provided');
    });
  });

  it('should validate required fields', () => {
    loginPage.visit().submit();

    // Verify error messages for required fields
    cy.get('#loginFrm_loginname').should('have.class', 'error');
    cy.get('#loginFrm_password').should('have.class', 'error');
  });

  it('should navigate to login page', () => {
    loginPage.visit();
    cy.urlShouldContain('account/login');
    cy.title().should('include', 'Account Login');
  });
});
