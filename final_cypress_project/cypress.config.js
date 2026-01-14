const { defineConfig } = require('cypress');
const { getConfig } = require('./cypress/config/environments');

const envConfig = getConfig();

module.exports = defineConfig({
  e2e: {
    // Base URL for the application
    baseUrl: envConfig.baseUrl,

    // Viewport settings
    viewportWidth: 1280,
    viewportHeight: 720,

    // Default command timeout
    defaultCommandTimeout: 10000,

    // Request timeout
    requestTimeout: 10000,

    // Response timeout
    responseTimeout: 30000,

    // Page load timeout
    pageLoadTimeout: 60000,

    // Retry attempts
    retries: {
      runMode: 2, // Retry 2 times in CI/CD
      openMode: 0, // No retries in interactive mode
    },

    // Video settings
    video: true,
    videoCompression: 32,

    // Screenshot settings
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,

    // Support file location
    supportFile: 'cypress/support/e2e.js',

    // Spec file pattern
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

    // Exclude specific files
    excludeSpecPattern: ['**/node_modules/**', '**/coverage/**'],

    // Experimental features
    experimentalStudio: false,

    // Setup node events
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      // Example: Task for custom operations
      // on('task', {
      //   log(message) {
      //     console.log(message);
      //     return null;
      //   }
      // });

      // Load environment-specific config
      config.baseUrl = envConfig.baseUrl;

      return config;
    },
  },

  // Component testing configuration (if needed)
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },

  // Environment variables
  env: {
    apiUrl: envConfig.apiUrl,
    environment: process.env.CYPRESS_ENV || 'dev',
  },
});
