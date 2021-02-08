module.exports = {
  rootDir: '.',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  verbose: true,
  collectCoverageFrom: ["src/**/*.ts"],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules"
  ],
  coverageReporters: [
    "json",
    "lcov",
    "text"
  ],
  coverageThreshold: {
    "global": {
      "branches": 60,
      "functions": 60,
      "lines": 60,
      "statements": 60
    }
  },
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
  ]
}
