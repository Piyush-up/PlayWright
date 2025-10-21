import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // Recording...
  await page.goto("https://en.wikipedia.org/wiki/Portal:Current_events");
  await expect(
    page.getByRole("link", { name: "Wikipedia The Free" })
  ).toBeVisible();
  await expect(page.locator("#firstHeading")).toContainText(
    "Portal:Current events"
  );
  await page.getByRole("radio", { name: "Wide" }).check();
  await page.getByRole("radio", { name: "Automatic" }).check();
  await page.getByRole("link", { name: "Cameroonian" }).click();
  await expect(page.locator("#firstHeading")).toContainText("Cameroon");
  await expect(
    page.locator("figure > .mw-file-description").first()
  ).toBeVisible();
  await expect(page.locator("#mw-content-text")).toContainText(
    "Bamum script is a writing system developed by King Njoya in the late 19th century."
  );
});
