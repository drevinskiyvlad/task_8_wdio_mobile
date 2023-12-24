# Automated Mobile Tests with WDIO and BrowserStack

## Summary of Repo

This repository contains automated mobile tests created using WDIO (WebdriverIO) and BrowserStack. The tests cover various scenarios such as login, drag-and-drop, and are designed to be run on Android devices.

## Requirements

Make sure you have the following requirements installed before running the tests:

- Node.js
- NPM (Node Package Manager)

## Steps to Install

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run the following command to install dependencies:

```bash
npm install
```

## Steps to Launch

Before launching the tests, ensure you have a `.env` file in the project root with the following environment variables:

```plaintext
BROWSERSTACK_USERNAME=your_browserstack_username
BROWSERSTACK_ACCESS_KEY=your_browserstack_access_key
BROWSERSTACK_APP_ID=your_browserstack_app_id
```

Now, you can execute the tests using the following scripts:

- Run all tests:

```bash
npm run test
```

- Run tests specifically on Samsung device:

```bash
npm run test:samsung
```

- Run only login suite:

```bash
npm run test:login
```

- Run only drag-and-drop suite:

```bash
npm run test:drag
```

## Steps to Creating the Report

To generate and view the test report, use the following commands:

```bash
npm run report
```

This command internally executes:

```bash
npm run report:generate && npm run report:open
```

- To generate the Allure report:

```bash
npm run report:generate
```

- To open the generated Allure report:

```bash
npm run report:open
```

The test report will provide insights into test results, including passed and failed scenarios.