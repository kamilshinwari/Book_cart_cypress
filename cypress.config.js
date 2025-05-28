const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.demoblaze.com/",
    reporter: 'cypress-mochawesome-reporter',
    screenshotOnRunFailure:true,
    video:false,
    reporterOptions: {
      reportDir: "cypress/reports",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
