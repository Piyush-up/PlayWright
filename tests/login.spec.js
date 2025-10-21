import { test, expect } from "@playwright/test";

test.describe("Login tests", () => {
  let usernameField, passwordField, submit;

  // test.use({ viewport: { height: 1960, width: 1080 } });

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    usernameField = page.getByLabel("Username");
    passwordField = page.getByLabel("Password");
    submit = page.getByRole("button", { name: "Submit" });
  });

  test("valid login", async ({ page }) => {
    //   await page.goto("https://practicetestautomation.com/practice-test-login/");
    //   await page.setViewportSize({ width: 1920, height: 1080 });

    await expect(page).toHaveURL(/login/);
    await expect(page.getByText("Test login")).toBeVisible();

    //   await page.waitForTimeout(5000);
    await expect(usernameField).toBeEditable();
    await expect(usernameField).toBeVisible();
    await usernameField.fill("student");
    await passwordField.fill("Password123");
    //   await page.waitForTimeout(5000);

    await submit.click();
    const successMssg = "//h1[normalize-space()='Logged In Successfully']";

    await expect(page.locator(successMssg)).toBeVisible();
  });

  test("invalid login", async ({ page }) => {
    await usernameField.fill("wrong");
    await passwordField.fill("Password123");
    await submit.click();

    // 1st way
    const errXpath = page.locator("//div[@id='error']");
    await expect(errXpath).toHaveText(/invalid/);

    // 2nd way
    const errMssg = await page.locator("//div[@id='error']").textContent();
    console.log("Error Message is :", errMssg);
    expect(errMssg.includes("invalid")).toBeTruthy();
    expect.soft(errMssg === "Your username is invalid!").toBeTruthy();
  });
});
