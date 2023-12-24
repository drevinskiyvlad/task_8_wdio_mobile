import dotenv from 'dotenv';

dotenv.config();

export const config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    updateJob: false,
    specs: [
        '../specs/**.e2e.js'
    ],
    exclude: [],

    suites: {
        login: [
            '../specs/login.e2e.js',
        ],
        drag: [
            '../specs/drag.e2e.js',
        ],
    },

    capabilities: [{
        project: "Task 8: Mobile Automation on Browserstack + WebdriverIO",
        build: 'Webdriverio Android',
        name: 'task_8',
        device: 'Samsung Galaxy S23 Ultra',
        os_version: "13.0",
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