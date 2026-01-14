/**
 * Environment Configuration
 * Manages different environment settings
 */
const environments = {
  dev: {
    baseUrl: 'https://automationteststore.com/',
    apiUrl: 'https://automationteststore.com/api/',
    timeout: 10000,
  },
  staging: {
    baseUrl: 'https://automationteststore.com/',
    apiUrl: 'https://automationteststore.com/api/',
    timeout: 15000,
  },
  production: {
    baseUrl: 'https://automationteststore.com/',
    apiUrl: 'https://automationteststore.com/api/',
    timeout: 20000,
  },
};

/**
 * Get current environment or default to dev
 */
const getEnvironment = () => {
  return process.env.CYPRESS_ENV || 'dev';
};

/**
 * Get environment config
 */
const getConfig = () => {
  const env = getEnvironment();
  return environments[env] || environments.dev;
};

module.exports = {
  environments,
  getEnvironment,
  getConfig,
};
