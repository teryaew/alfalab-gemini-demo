module.exports = {
  gridUrl: 'http://localhost:8887',
  rootUrl: 'http://localhost:8888',
  windowSize: '1024x768',

  httpTimeout: 60000,
  retry: 2,
  sessionsPerBrowser: 3,
  suitesPerSession: 100,

  browsers: {
    PhantomJS: {
      desiredCapabilities: {
        browserName: 'phantomjs'
      }
    }
  },

  system: {
    exclude: [
      'node_modules/'
    ],
    tempDir: './'
  }
};
