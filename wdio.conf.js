import dotenv from 'dotenv';

dotenv.config();

export const config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    updateJob: false,
    specs: [
        './test/specs/**.e2e.js'
    ],
    exclude: [],

    suites: {
        login: [
            './test/specs/login.e2e.js',
        ],
        drag: [
            './test/specs/drag.e2e.js',
        ],
    },

    capabilities: [{
        project: "First Webdriverio Android Project",
        build: 'Webdriverio Android',
        name: 'first_test',
        device: 'Google Pixel 3',
        os_version: "9.0",
        app: process.env.BROWSERSTACK_APP_ID,
        'browserstack.debug': true
    }],

    logLevel: 'warn',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 200000
    },
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
};