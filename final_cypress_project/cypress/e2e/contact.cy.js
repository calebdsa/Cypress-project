const ContactUsPage = require('../pages/ContactUsPage');

describe('Contact Us Tests', () => {
  let contactUsPage;

  beforeEach(() => {
    contactUsPage = new ContactUsPage();
  });

  it('should successfully submit contact form', () => {
    cy.fixture('testUsers').then((users) => {
      contactUsPage
        .visit()
        .fillContactForm(users.contactForm)
        .submit();

      // Verify success message
      contactUsPage.verifySuccessMessage('Your enquiry has been successfully sent');
    });
  });

  it('should submit contact form with custom data', () => {
    const contactData = {
      name: 'Test User',
      email: `test${Date.now()}@example.com`,
      enquiry: 'This is a test enquiry message.',
    };

    contactUsPage
      .visit()
      .fillContactForm(contactData)
      .submit();

    // Verify success
    cy.urlShouldContain('content/contact');
    cy.get('.alert-success').should('be.visible');
  });

  it('should validate required fields', () => {
    contactUsPage.visit().submit();

    // Verify error messages for required fields
    cy.get('#ContactUsFrm_first_name').should('have.class', 'error');
    cy.get('#ContactUsFrm_email').should('have.class', 'error');
    cy.get('#ContactUsFrm_enquiry').should('have.class', 'error');
  });

  it('should navigate to contact page', () => {
    contactUsPage.visit();
    cy.urlShouldContain('content/contact');
    cy.title().should('include', 'Contact Us');
  });

  it('should validate email format', () => {
    contactUsPage
      .visit()
      .fillName('Test User')
      .fillEmail('invalid-email')
      .fillEnquiry('Test enquiry')
      .submit();

    // Verify email validation error
    cy.get('#ContactUsFrm_email').should('have.class', 'error');
  });
});
