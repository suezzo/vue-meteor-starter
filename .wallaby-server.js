module.exports = (wallaby) => {
  const path = require('path');
  return {
    debug: false,
    testFramework: 'mocha',
    files: [
      { pattern: '/imports/.test-suite/mocks.js', instrument: false },
      { pattern: '/imports/.test-suite/factories/*.js', instrument: false },
      '/imports/.factories.js',
      '/packages/**/*.js',
      '/imports/controllers/*.js',
      '/imports/modules/**/methods.js',
      '/client/translations.js',
      {pattern: '/client/**/*.test.js', ignore: true},
      {pattern: '/imports/**/*.test.js', ignore: true},
      {pattern: '/packages/**/*.test.js', ignore: true}
    ],
    tests: [
      '/imports/modules/**/*.test.js',
      '/packages/**/*.test.js',
      '/client/*.test.js',
      '/imports/controllers/*.test.js'
    ],
    compilers: {'**/*.js': wallaby.compilers.babel({
      presets: ['es2015']
    })},
    env: {type: 'node'},
    workers: {initial: 1, regular: 1, recycle: true},
    setup: () => {
      wallaby.testFramework.addFile(`${wallaby.localProjectDir}/.config/mocha.bootstrap.js`);
    },
  }
};
