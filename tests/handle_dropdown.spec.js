import { test, expect } from "@playwright/test";

test.describe("Dropdown Selection", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
  });

  // validating drop-down value selection
  test("Single drop-down", async ({ page }) => {
    await page.selectOption("#state", "Assam");
    await page.selectOption("#state", { label: "Kerala" });
    await page.waitForTimeout(1000);
    await page.selectOption("#state", { value: "Himachal Pradesh" });
    await page.waitForTimeout(1000);
    await page.selectOption("#state", { index: 8 });
    await page.waitForTimeout(1000);
    await page.locator("#state").selectOption("Assam");
    await page.waitForTimeout(1000);
  });

  // validate selected value is showing or not
  test("validate selected option is present", async ({ page }) => {
    await page.locator("#state").selectOption("Assam");
    await page.waitForTimeout(1000);
    await expect(page.locator("#state")).toHaveValue("Assam");
  });

  // validate particular state exists in  drop-dwon list
  test("Validate Drop-down list", async ({ page }) => {
    const stateList = await page.locator("#state").textContent();
    const state = ["Tamil Nadu", "Assam"];
    state.map((st) => expect(stateList).toContain(st));
  });

  // test to validate multiple select when they are actually select elements
  test("multiple select", async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    await page.selectOption("#hobbies", [
      { label: "Reading" },
      { label: "Swimming" },
    ]);
  });

  // test single/multiple dropdpwn when they arer not select elements
  test("non-select elements", async ({ page }) => {
    await page.goto("https://select2.org/getting-started/basic-usage");
    await page.selectOption("select2-glan-container", [
      { label: "Alaska" },
      { label: "Hawaii" },
      { label: "Nevada" },
    ]);
  });
});
