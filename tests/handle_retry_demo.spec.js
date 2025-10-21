import { test, expect } from "@playwright/test";

test("retry should trigger", async ({ page }) => {
  await page.goto("https://example.com");
  expect(1).toBe(2); // should fail and retry twice
});
