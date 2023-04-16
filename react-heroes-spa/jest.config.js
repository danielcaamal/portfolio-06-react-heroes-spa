export default {
    testEnvironment: 'jest-environment-jsdom',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
    ],
    coverageDirectory: 'coverage',
    transformIgnorePatterns: [
        "node_modules/(?!variables/.*)"
    ]
}