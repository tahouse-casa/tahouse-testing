const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl:'https://dev.tahouse.casa/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
    reporterOptions:{
      charts:true,
      overwrite:false,
      html:true,
      json:true,
      reporterDir:"cypress/mochawesome-report"

    },
      // viewportHeight:670,
      // viewportWidth:380,
      chromeWebSecurity:false
  },

});
