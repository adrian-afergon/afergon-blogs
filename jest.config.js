module.exports = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.jest.json"
        }
    }
};
