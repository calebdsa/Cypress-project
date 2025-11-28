const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Set your real site URL here
    baseUrl: "https://automationteststore.com/",

    setupNodeEvents(on, config) {
      // you can add tasks or plugins here if needed
    }
  }
});
