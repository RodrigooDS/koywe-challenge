const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  collectCoverage: true,
  coverageReporters: ['json', 'html', 'cobertura', 'lcov', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 50,
      lines: 80,
    },
  },
};
