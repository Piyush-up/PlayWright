1. check node is intalled
   => node -v
2. create folder and open in VS code
3. npm init playwright@latest
   say yes to all and package.json will be created inside the step 2. folder
4. Run all specs.js
   => npx playwright test
5. run specific spec.js file
   => npx playwright test ./tests/login.spec.js
6. run in headed mode (with browser)
   => npx playwright test --headed
7. run in one specific browser
   => npx playwright test --project=chromium
   => npx playwright test --project=firefox
8. show html reports for ran tests
   => npx playwright show-report
9. write code via browser actions:
   => npx playwright codegen https://example.com
10. Screenshot/Video/Traces
    => use: {
    screenshot: 'on',
    video: 'on',
    trace: 'retain-on-failure',
    }
11. To configure scripts in package.json
    => "scripts": {
    "test:e2e": "npx playwright test",
    "test:headed": "npx playwright test --headed",
    "test:debug": "npx playwright test --debug"
    }
    => npm run test:e2e

// INSTALL ALLURE

1. install allure
   => npm install -D allure-playwright
2. install allure CLI
   => npm install --save-dev allure-commandline
3. add allure in config to generate report
   =>reporter: [
   ['line'],
   ['allure-playwright']
   ],
4. run all the tests
   => npx playwright test
   this will create allure-results folder
5. generate allure report from allure results
   => allure generate ./allure-results -o ./allure-report
6. view generated allure report
   => allure open ./allure-report
