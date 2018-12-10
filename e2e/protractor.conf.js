// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  defaultTimeoutInterval: 30000,

  // Here I set which tests will be performed
  //
  specs: [
    '../e2e/src/features/*.feature'
  ],
  SELENIUM_PROMISE_MANAGER: false,
  useAllAngular2AppRoots: true,

  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      binary: process.env.CHROME_BIN,
      args: ['--no-sandbox']
    }
  },

  directConnect: true,
  baseUrl: 'http://localhost:4200/',

  // THANKS JASMINE NO NEED YOU ANY MORE
  //
  // framework: 'jasmine',
  // jasmineNodeOpts: {
  //   showColors: true,
  //   defaultTimeoutInterval: 30000,
  //   print: function() {}
  // },
  //

  framework: 'custom',
  cucumberOpts: {
    compiler: "ts:ts-node/register",
    require: ['../e2e/src/steps-definitons/*', '../e2e/src/page-objects/*', '../../support/*.ts'],
    format: 'json:results.json',
  },
  frameworkPath: require.resolve('protractor-cucumber-framework'),


  onPrepare() {
    browser.driver.manage().window().maximize();
    browser.driver.manage().timeouts().implicitlyWait(10000);
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    
    // jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
 
};
