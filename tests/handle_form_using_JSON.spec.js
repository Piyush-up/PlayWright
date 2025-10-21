import test, { expect } from "@playwright/test";
import userData from "../testData.json";

const [user] = userData;
let prefix = Math.random().toString(36).substring(2, 10);

test.describe("Data Driven Tetsing", () => {
  for (let user of userData) {
    test(`read data from JSON file ${user.id}`, async ({ page }) => {
      await page.goto("https://freelance-learn-automation.vercel.app/signup");

      // fill form using data
      await page.getByPlaceholder("Name").fill(prefix + user.name);
      await page.waitForTimeout(1000);
      await page.getByPlaceholder("Email").fill(prefix + user.email);
      await page.waitForTimeout(1000);

      await page.getByPlaceholder("Password").fill(user.password);
      await page.waitForTimeout(1000);

      for (const interest of user.interests) {
        const checkbox = page.getByLabel(interest);
        await checkbox.waitFor({ state: "visible" });
        await checkbox.check(); // or .check({ force: true }) if custom styled
      }

      await page.waitForTimeout(1000);

      await page.locator(`//input[@value='${user.gender}']`).check();
      await page.waitForTimeout(1000);

      await page.selectOption("#state", { label: user.state });
      await page.waitForTimeout(1000);

      await page.selectOption(
        "#hobbies",
        user.Hobbies.map((hobby) => {
          return {
            label: hobby,
          };
        })
      );
      await page.waitForTimeout(1000);

      page.getByRole("button", { name: "Sign up" }).click();
      await expect(
        page.getByText("Signup successfully, Please login!")
      ).toBeVisible();
      await page.waitForTimeout(1000);
    });
  }
});
