class LoginPage {
  visit() {
    cy.visit("/index.php?rt=account/login");
  }

  enterEmail(email) {
    cy.get("#loginFrm_loginname").type(email);
  }

  enterPassword(password) {
    cy.get("#loginFrm_password").type(password);
  }

  submit() {
    cy.get("button[title='Login']").click();
  }
}

module.exports = new LoginPage();
