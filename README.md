# Atlys QA Assignment

Test plan document is attached in .xlsx sheet, donwload it separately to view content.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run UI tests using:
   => npx playwright test

4. Run API test using:
   => npx jest tests/searchApi.test.js

---

Deliverables Covered

✅ Test plan with 7 scenarios
✅ UI automation for 3 scenarios
✅ API testing for 3 scenarios
✅ Documentation & project structure

---

.Repository Structure
├── tests/
│ ├── searchApi.test.js # API tests
│ ├── testSearch.spec.js # UI tests
├── package.json
├── playwright.config.js
└── README.md

NOTE

Ensure Node.js and npm are installed before running the tests.
For UI tests, Playwright will automatically download required browser binaries on first install.
API tests use fetch or axios for HTTP requests.
The HTML report from Playwright provides detailed results and screenshots for failed tests.
