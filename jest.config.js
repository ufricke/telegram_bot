module.exports = {
  // The root directory that Jest should scan for test files
  roots: ['<rootDir>/__tests__'],

  // The file extensions that Jest should consider for tests
  testMatch: ['**/*.test.ts'],

  // The test environment that Jest should use
  testEnvironment: 'node',

  moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'ts', 'tsx'], // Add .ts and .tsx extensions

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  extensionsToTreatAsEsm: ['.ts'], // Treat .ts files as ES modules
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$', // Include .tsx files in the test regex
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Use ts-jest for .ts and .tsx files
  },
  globals: {
    'ts-jest': {
      useESM: true, // Use ES modules with ts-jest
    },
  },
};
