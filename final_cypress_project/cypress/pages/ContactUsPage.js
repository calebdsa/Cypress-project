const BasePage = require('../support/base/BasePage');

class ContactUsPage extends BasePage {
  // Selectors
  selectors = {
    firstNameInput: '#ContactUsFrm_first_name',
    emailInput: '#ContactUsFrm_email',
    enquiryTextarea: '#ContactUsFrm_enquiry',
    submitButton: "button[title='Submit']",
    successMessage: '.alert-success',
    errorMessage: '.alert-error',
  };

  /**
   * Visit contact us page
   */
  visit() {
    super.visit('/index.php?rt=content/contact');
    return this;
  }

  /**
   * Fill name field
   * @param {string} name - Name
   */
  fillName(name) {
    this.typeText(this.selectors.firstNameInput, name);
    return this;
  }

  /**
   * Fill email field
   * @param {string} email - Email address
   */
  fillEmail(email) {
    this.typeText(this.selectors.emailInput, email);
    return this;
  }

  /**
   * Fill enquiry message
   * @param {string} message - Enquiry message
   */
  fillEnquiry(message) {
    this.typeText(this.selectors.enquiryTextarea, message);
    return this;
  }

  /**
   * Submit contact form
   */
  submit() {
    this.clickElement(this.selectors.submitButton);
    return this;
  }

  /**
   * Fill complete contact form
   * @param {Object} contactData - Contact form data
   */
  fillContactForm(contactData) {
    this.fillName(contactData.name);
    this.fillEmail(contactData.email);
    this.fillEnquiry(contactData.enquiry);
    return this;
  }

  /**
   * Verify success message
   * @param {string} expectedMessage - Expected success message
   */
  verifySuccessMessage(expectedMessage) {
    this.getElement(this.selectors.successMessage).should('contain', expectedMessage);
    return this;
  }
}

module.exports = ContactUsPage;
