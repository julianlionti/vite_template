/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  snapshotSerializers: ['@emotion/jest/serializer'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}
