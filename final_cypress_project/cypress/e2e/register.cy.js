const RegisterPage = require('../pages/RegisterPage');
const { generateUserData } = require('../utils/testDataGenerator');

describe('Registration Tests', () => {
  let registerPage;

  beforeEach(() => {
    registerPage = new RegisterPage();
  });

  it('should successfully register a new user', () => {
    const userData = generateUserData();
    userData.country = 'United States';
    userData.region = 'California';
    userData.address1 = '123 Test Street';
    userData.city = 'Test City';
    userData.zipcode = '12345';
    userData.phone = '1234567890';

    registerPage
      .visit()
      .fillRegistrationForm(userData)
      .submit();

    // Verify successful registration - adjust selector based on actual page
    cy.urlShouldContain('account/success');
  });

  it('should register user using fixture data', () => {
    cy.fixture('testUsers').then((users) => {
      const userData = {
        ...users.newUser,
        loginname: `user${Date.now()}`,
        password: users.newUser.password,
      };
      userData.country = 'United States';
      userData.region = 'California';

      registerPage
        .visit()
        .fillRegistrationForm(userData)
        .submit();

      cy.urlShouldContain('account/success');
    });
  });

  it('should validate required fields', () => {
    registerPage.visit().submit();

    // Verify error messages for required fields
    cy.get('#AccountFrm_firstname').should('have.class', 'error');
    cy.get('#AccountFrm_lastname').should('have.class', 'error');
  });

  it('should navigate to registration page', () => {
    registerPage.visit();
    cy.urlShouldContain('account/create');
    cy.title().should('include', 'Create Account');
  });
});
