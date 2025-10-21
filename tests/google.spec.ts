import { test, expect } from "@playwright/test";
import { title } from "process";

test("Validate page header", async ({ page }) => {
  await page.goto("https://google.com");
  await expect(page.getByRole("link", { name: "About" })).toContainText(
    "About"
  );
  await expect(page.getByRole("link", { name: "Store" })).toContainText(
    "Store"
  );

  const pageTitle = await page.title();
  expect(await page.title()).toEqual(pageTitle);
  expect(pageTitle).toEqual("Google");
  expect(page).toHaveTitle(pageTitle);

  await page.getByRole("img", { name: "Google" }).click();
  await expect(page.getByRole("search")).toContainText("Google Search");
  await page.getByRole("button", { name: "I'm Feeling Lucky" }).click();
});
