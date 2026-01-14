const BasePage = require('../support/base/BasePage');

class RegisterPage extends BasePage {
  // Selectors
  selectors = {
    firstNameInput: '#AccountFrm_firstname',
    lastNameInput: '#AccountFrm_lastname',
    emailInput: '#AccountFrm_email',
    phoneInput: '#AccountFrm_telephone',
    faxInput: '#AccountFrm_fax',
    companyInput: '#AccountFrm_company',
    address1Input: '#AccountFrm_address_1',
    address2Input: '#AccountFrm_address_2',
    cityInput: '#AccountFrm_city',
    regionInput: '#AccountFrm_zone_id',
    zipcodeInput: '#AccountFrm_postcode',
    countrySelect: '#AccountFrm_country_id',
    loginnameInput: '#AccountFrm_loginname',
    passwordInput: '#AccountFrm_password',
    passwordConfirmInput: '#AccountFrm_confirm',
    newsletterYes: '#AccountFrm_newsletter1',
    newsletterNo: '#AccountFrm_newsletter0',
    agreeTermsCheckbox: '#AccountFrm_agree',
    continueButton: "button[title='Continue']",
  };

  /**
   * Visit the registration page
   */
  visit() {
    super.visit('/index.php?rt=account/create');
    return this;
  }

  /**
   * Enter first name
   * @param {string} firstName - First name
   */
  enterFirstName(firstName) {
    this.typeText(this.selectors.firstNameInput, firstName);
    return this;
  }

  /**
   * Enter last name
   * @param {string} lastName - Last name
   */
  enterLastName(lastName) {
    this.typeText(this.selectors.lastNameInput, lastName);
    return this;
  }

  /**
   * Enter email
   * @param {string} email - Email address
   */
  enterEmail(email) {
    this.typeText(this.selectors.emailInput, email);
    return this;
  }

  /**
   * Enter phone number
   * @param {string} phone - Phone number
   */
  enterPhone(phone) {
    this.typeText(this.selectors.phoneInput, phone);
    return this;
  }

  /**
   * Enter address
   * @param {string} address - Address line 1
   */
  enterAddress1(address) {
    this.typeText(this.selectors.address1Input, address);
    return this;
  }

  /**
   * Enter city
   * @param {string} city - City name
   */
  enterCity(city) {
    this.typeText(this.selectors.cityInput, city);
    return this;
  }

  /**
   * Select country
   * @param {string} country - Country name
   */
  selectCountry(country) {
    this.getElement(this.selectors.countrySelect).select(country);
    return this;
  }

  /**
   * Select region/state
   * @param {string} region - Region/State name
   */
  selectRegion(region) {
    this.getElement(this.selectors.regionInput).select(region);
    return this;
  }

  /**
   * Enter zipcode
   * @param {string} zipcode - Zipcode
   */
  enterZipcode(zipcode) {
    this.typeText(this.selectors.zipcodeInput, zipcode);
    return this;
  }

  /**
   * Enter login name
   * @param {string} loginname - Login name
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
   * Enter password confirmation
   * @param {string} password - Password confirmation
   */
  enterPasswordConfirm(password) {
    this.typeText(this.selectors.passwordConfirmInput, password);
    return this;
  }

  /**
   * Agree to terms and conditions
   */
  agreeToTerms() {
    this.clickElement(this.selectors.agreeTermsCheckbox);
    return this;
  }

  /**
   * Submit registration form
   */
  submit() {
    this.clickElement(this.selectors.continueButton);
    return this;
  }

  /**
   * Fill complete registration form
   * @param {Object} userData - User registration data
   */
  fillRegistrationForm(userData) {
    this.enterFirstName(userData.firstName);
    this.enterLastName(userData.lastName);
    this.enterEmail(userData.email);
    if (userData.phone) this.enterPhone(userData.phone);
    if (userData.address1) this.enterAddress1(userData.address1);
    if (userData.city) this.enterCity(userData.city);
    if (userData.country) this.selectCountry(userData.country);
    if (userData.region) this.selectRegion(userData.region);
    if (userData.zipcode) this.enterZipcode(userData.zipcode);
    if (userData.loginname) this.enterLoginName(userData.loginname);
    if (userData.password) {
      this.enterPassword(userData.password);
      this.enterPasswordConfirm(userData.password);
    }
    this.agreeToTerms();
    return this;
  }
}

module.exports = RegisterPage;
