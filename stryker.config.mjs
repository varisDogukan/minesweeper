// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  _comment:
    "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information.",
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  testRunner_comment:
    "Take a look at https://stryker-mutator.io/docs/stryker-js/jest-runner for information about the jest plugin.",
  coverageAnalysis: "perTest",
  thresholds: { high: 90, low: 80, break: 85 },
  mutate: [
    "src/**/*.ts?(x)",
    "!src/**/*@(.test|.spec|Spec|stories|styled).ts?(x)",
    "!__mocks__",
    "!__snapshots__",
  ],
};
export default config;
