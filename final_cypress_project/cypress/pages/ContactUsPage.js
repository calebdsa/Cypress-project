class ContactUsPage {
  visit() {
    cy.visit("/index.php?rt=content/contact");
  }

  fillName(name) {
    cy.get("#ContactUsFrm_first_name").type(name);
  }

  fillEmail(email) {
    cy.get("#ContactUsFrm_email").type(email);
  }

  fillEnquiry(msg) {
    cy.get("#ContactUsFrm_enquiry").type(msg);
  }

  submit() {
    cy.get("button[title='Submit']").click();
  }
}

module.exports = new ContactUsPage();
