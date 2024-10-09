### Testing with Playwright of Ngx-Admin Angular 14 application from akveo.com

This repository contains a modified and simplified version of an original application, designed specifically for practicing UI automation with Playwright.
The original repo is here: https://github.com/akveo/ngx-admin

**Key Features:**

- Playwright Automation: Utilizes Playwright for efficient and reliable UI testing.
- Page Object Model: Employs the Page Object Model design pattern to organize tests and improve maintainability.
- Helper Functions: Leverages a dedicated helper function module to encapsulate common utility functions.
- Page Object Management: This approach uses a Page Object Manager to centralize interactions with page objects, promoting modularity and reusability.

**Project Structure:**
![Screenshot 2024-10-10 at 7 19 56 AM](https://github.com/user-attachments/assets/a48c5d4d-6567-4688-ba1b-e579c6795e3b)

**Explanation:**

- `pages` directory: This directory contains page object classes for each page of the application, defining locators and methods for interacting with elements.

- `helpers` directory: Houses helper functions that can be used across test cases.

- `tests` directory: Contains test scripts that interact with the application through the Page Object Manager.

- `playwright.config.ts`: Configures Playwright settings, such as browsers, devices, and timeouts.


**Usage:**
**Install dependencies:**
`npm install`

**Run tests:**
`npx playwright test`

