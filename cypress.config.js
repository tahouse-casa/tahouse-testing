const { defineConfig } = require("cypress");
const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  // reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl:'https://dev.tahouse.casa/',
    setupNodeEvents(on, config) {
    require('cypress-mochawesome-reporter/plugin')(on);
    cypressSplit(on, config)
      return config
    },
    reporter:'mochawesome',
    reporterOptions:{
      charts:true,
      overwrite:false,
      html:true,
      json:true,
      // reporterDir:"cypress/mochawesome-report"
      reportDir: 'cypress/results'
    },
      // viewportHeight:670,
      // viewportWidth:380,
      chromeWebSecurity:false
  },
});
