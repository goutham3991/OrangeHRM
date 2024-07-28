const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  projectId: "fzc7ha",
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    defaultCommandTimeout: 5000,
    watchForFileChanges: false,
    env:{
      username: 'Admin',
      password: 'admin123'
    }
  },
  
});
