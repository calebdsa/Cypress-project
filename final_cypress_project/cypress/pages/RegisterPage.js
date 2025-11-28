class RegisterPage {
  visit() {
    cy.visit("/index.php?rt=account/create");
  }

  enterFirstName(name) {
    cy.get("#AccountFrm_firstname").type(name);
  }

  enterLastName(name) {
    cy.get("#AccountFrm_lastname").type(name);
  }

  enterEmail(email) {
    cy.get("#AccountFrm_email").type(email);
  }

  enterPassword(password) {
    cy.get("#AccountFrm_password").type(password);
  }

  submit() {
    cy.get("button[title='Continue']").click();
  }
}

module.exports = new RegisterPage();
