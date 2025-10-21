import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/#/");
  await page.getByRole("heading", { name: "todos" }).click();
  await expect(page.getByRole("heading", { name: "todos" })).toBeVisible();
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .dblclick();
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .fill("get some icecream");
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .press("Enter");
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .fill("get some choclate");
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .press("Enter");
  await expect(page.locator("body")).toContainText("get some icecream");
  await expect(page.locator("body")).toContainText("get some choclate");
  await page.getByRole("link", { name: "All" }).click();
  await page.getByRole("link", { name: "Active" }).click();
  await page.getByRole("link", { name: "Completed" }).click();
  await page.getByRole("link", { name: "All" }).click();
  await page
    .getByRole("listitem")
    .filter({ hasText: "get some icecream" })
    .getByLabel("Toggle Todo")
    .check();
  await expect(
    page.getByRole("textbox", { name: "What needs to be done?" })
  ).toBeEmpty();
  await expect(page.locator("body")).toMatchAriaSnapshot(
    `- text: get some choclate`
  );
});
