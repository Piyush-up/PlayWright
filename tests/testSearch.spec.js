import { test, expect } from "@playwright/test";

test.describe("Product Search Feature", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.fnp.com/");
  });

  test("Search with valid product name", async ({ page }) => {
    const input = page.locator('[data-testid="input_field"]').first();
    // Search for cake
    await input.fill("Chocolate Truffle Delicious Cake Half kg Eggless");
    await input.press("Enter");

    // Verify results
    const container = page.locator("#plpProduct");
    await expect(container).toBeVisible();

    // find the one that we want
    const product = page.locator('[data-productid="CAKE136985"]');

    // Assert it is visible
    await expect(product).toBeVisible();
  });

  test("Search with invalid product name", async ({ page }) => {
    const input = page.locator('[data-testid="input_field"]').first();
    // Search for cake
    await input.fill("khsdfsdfdlsjfdsfjlj");
    await input.press("Enter");

    // validate empty result
    const noResults = page
      .locator("div", {
        hasText: "Sorry, No Results Found.",
      })
      .first();
    await expect(noResults).toBeVisible();

    // validate try again text
    const tryAgain = page.locator("div", {
      hasText: "Please try searching for something else.",
    });
    await expect(tryAgain).toBeVisible();
  });

  test("Empty search", async ({ page }) => {
    const input = page.locator('[data-testid="input_field"]').first();
    // Empty search
    await input.fill("");
    await input.press("Enter");

    // Validate all results
    const divWith40 = page.locator("div", { hasText: "40" });
    const divWith12411 = page.locator("div", { hasText: "12411" });

    // Assert it is visible
    await expect(divWith40).toBeVisible();
    await expect(divWith12411).toBeVisible();
  });
});
