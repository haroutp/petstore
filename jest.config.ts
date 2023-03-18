import 'module-alias/register';
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json'],
  rootDir: '.',
  roots: [
    "<rootDir>"
  ],
  testMatch: ['<rootDir>/__test__/**/*.spec.ts'],
  verbose: true,
  moduleNameMapper: {
    "^@mocks/(.*)$": "<rootDir>/__mocks__/$1",
    '^@handlers/(.*)$': '<rootDir>/handlers/$1',
    '^@functional-tests$': '<rootDir>',
    '^@functional-tests/(.*)$': '<rootDir>/$1',
    // "^@functional-tests$": "<rootDir>/__test__",
    // '^@functional-tests/(.*)$': '<rootDir>/__test__/$1',
  },
  testTimeout: 160000,
};

export default config;
