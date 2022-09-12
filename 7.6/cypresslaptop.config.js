const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 1,
  viewportWidth: 1366,
  viewportHeight: 768,

  e2e: {
    baseUrl: "http://localhost:3000",
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});