const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl: "https://example.com",
    setupNodeEvents(on, config) {}
  }
});