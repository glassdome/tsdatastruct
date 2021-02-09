module.exports = {
  rootDir: '.',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  verbose: true,
  transform: {
    ".ts": "ts-jest"
  },
  testRegex: [
    "./test/.*\\.(test|spec)\\.ts$",
    "./src/.*\\.(test|spec)\\.ts$"
  ],
  moduleFileExtensions: [
    "ts",
    "js",
    "json"
  ],  
  //collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  coverageDirectory: 'docs/coverage',
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules"
  ],
  coverageReporters: [ "html", "text" ],
  coverageThreshold: {
    "global": {
      "branches": 65,
      "functions": 65,
      "lines": 65,
      "statements": 65
    }
  }

}
