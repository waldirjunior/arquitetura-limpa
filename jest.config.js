module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  testEnvironment: 'node',
  clearMocks: true,
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  coverageProvider: 'v8'
}
