const BasePage = require('../support/base/BasePage');

class LoginPage extends BasePage {
  // Selectors
  selectors = {
    loginnameInput: '#loginFrm_loginname',
    passwordInput: '#loginFrm_password',
    loginButton: "button[title='Login']",
    errorMessage: '.alert',
  };

  /**
   * Visit the login page
   */
  visit() {
    super.visit('/index.php?rt=account/login');
    return this;
  }

  /**
   * Enter login name/email
   * @param {string} loginname - Login name or email
   */
  enterLoginName(loginname) {
    this.typeText(this.selectors.loginnameInput, loginname);
    return this;
  }

  /**
   * Enter password
   * @param {string} password - Password
   */
  enterPassword(password) {
    this.typeText(this.selectors.passwordInput, password);
    return this;
  }

  /**
   * Submit login form
   */
  submit() {
    this.clickElement(this.selectors.loginButton);
    return this;
  }

  /**
   * Perform login
   * @param {string} loginname - Login name or email
   * @param {string} password - Password
   */
  login(loginname, password) {
    this.enterLoginName(loginname);
    this.enterPassword(password);
    this.submit();
    return this;
  }

  /**
   * Verify error message is displayed
   * @param {string} expectedMessage - Expected error message
   */
  verifyErrorMessage(expectedMessage) {
    this.getElement(this.selectors.errorMessage).should('contain', expectedMessage);
    return this;
  }
}

module.exports = LoginPage;
