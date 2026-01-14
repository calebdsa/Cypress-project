/**
 * Test Data Generator
 * Utility functions to generate test data
 */

/**
 * Generate random email
 */
const generateRandomEmail = (prefix = 'test') => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `${prefix}${timestamp}${random}@example.com`;
};

/**
 * Generate random string
 */
const generateRandomString = (length = 10) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

/**
 * Generate random number
 */
const generateRandomNumber = (min = 1000, max = 9999) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Generate user data
 */
const generateUserData = () => {
  const timestamp = Date.now();
  return {
    firstName: `Test${timestamp}`,
    lastName: `User${timestamp}`,
    email: generateRandomEmail(),
    password: `Test1234${generateRandomNumber()}`,
    loginname: `testuser${timestamp}`,
  };
};

module.exports = {
  generateRandomEmail,
  generateRandomString,
  generateRandomNumber,
  generateUserData,
};
