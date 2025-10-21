import { test, expect } from "@playwright/test";

test("search name", async ({ page }) => {
  await page.goto("https://in.search.yahoo.com/?fr2=inr");
  await page.getByPlaceholder("Search the web").fill("Playwright");
  await page.waitForTimeout(1000);
  await page.keyboard.press("Meta+A");
  await page.keyboard.press("Meta+C");
  await page.waitForTimeout(1000);
  await page.keyboard.press("Backspace");
  await page.waitForTimeout(1000);
  await page.keyboard.press("Meta+V");
  await page.waitForTimeout(1000);
  await page.keyboard.type(" vs. Selenium");
  await page.waitForTimeout(1000);

  await page.keyboard.down("Shift");
  for (let i = 0; i < "Selenium".length; i++) {
    await page.keyboard.press("ArrowLeft");
  }
  await page.keyboard.up("Shift");
  await page.keyboard.press("Backspace");

  //   await page.keyboard.press("Enter");
});
