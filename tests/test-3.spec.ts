import { test, expect } from "@playwright/test";

test("Mouse hover test", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");
  await expect
    .soft(page.getByRole("heading", { name: "Learn Automation Courses" }))
    .toBeVisible();

  await page.getByPlaceholder("Enter Email").fill("admin@email.com");
  await page.getByPlaceholder("Enter Password").fill("admin@123");

  page.getByRole("button", { name: "Sign in" }).click();

  //hover over element
  const manageBtn = page.locator("//span[normalize-space()='Manage']");
  await manageBtn.hover();
  await manageBtn.click();

  await page.getByAltText("manage course").click();
  await expect
    .soft(page.getByRole("heading", { name: "Manage Courses" }))
    .toBeVisible();
});

// test("test", async ({ page }) => {
//   await page.goto("https://select2.org/getting-started/basic-usage");
//   await page.getByRole("textbox", { name: "Alaska" }).click();
//   await page
//     .getByLabel("Alaskan/Hawaiian Time Zone")
//     .getByRole("option", { name: "Alaska" })
//     .click();
//   await page.getByRole("textbox", { name: "Alaska" }).click();
//   await page
//     .getByLabel("Pacific Time Zone")
//     .getByRole("option", { name: "California" })
//     .click();
//   await page.getByRole("combobox").filter({ hasText: /^$/ }).click();
//   await page
//     .getByLabel("Alaskan/Hawaiian Time Zone")
//     .getByRole("option", { name: "Hawaii" })
//     .click();
//   await page.getByRole("combobox").filter({ hasText: "×Hawaii" }).click();
//   await page
//     .getByLabel("Pacific Time Zone")
//     .getByRole("option", { name: "Oregon" })
//     .click();
//   await page
//     .getByRole("combobox")
//     .filter({ hasText: "×Hawaii×Oregon" })
//     .click();
//   await page
//     .getByLabel("Mountain Time Zone")
//     .getByRole("option", { name: "Arizona" })
//     .click();
//   await page
//     .getByLabel("Mountain Time Zone")
//     .getByRole("option", { name: "Arizona" })
//     .click();
// });
