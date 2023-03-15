const { defineConfig } = require("cypress");
const cypressSplit = require('cypress-split')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    // baseUrl:'https://dev.tahouse.casa/',
    setupNodeEvents(on, config) {
    require('cypress-mochawesome-reporter/plugin')(on);
    cypressSplit(on, config)
      return config
    },
    // reporter:'cypress-multi-reporters',
    reporterOptions:{
      reportDir: 'cypress/results/json',
      reportFilename: '[name].html',
      charts:true,
      overwrite:false,
      html:false,
      json:true,
      video:true,
      // reporterDir:"cypress/mochawesome-report"
    },
      // viewportHeight:670,
      // viewportWidth:380,
      // chromeWebSecurity:false
  },
});
