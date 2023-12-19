import { Config } from 'jest';

const config: Config = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  resolver: '@nrwl/jest/plugins/resolver',
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  preset: 'jest-preset-angular'
};

export default config;
