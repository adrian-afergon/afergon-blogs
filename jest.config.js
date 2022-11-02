module.exports = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./jest.setup.ts'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.jest.json',
        },
    },
    moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
        // Handle module aliases (this will be automatically configured for you soon)
        '^@/lib/(.*)$': '<rootDir>/lib/$1',
        '^@/(.*)$': '<rootDir>/src/$1',
    },
};
