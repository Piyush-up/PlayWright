import test, { expect } from "@playwright/test";

test("JS Alert ", async ({ page }) => {
  await page.goto(
    "https://testpages.herokuapp.com/styled/alerts/alert-test.html?utm_source=chatgpt.com"
  );
  await page.waitForTimeout(3000);

  page.once("dialog", async (alert) => {
    expect(alert.type()).toBe("alert");
    expect(alert.message()).toBe("I am an alert box!");
    await page.waitForTimeout(2000);
    await alert.accept();
  });

  await page.locator("#alertexamples").click();
});

test("JS confirm alert", async ({ page }) => {
  await page.goto(
    "https://testpages.herokuapp.com/styled/alerts/alert-test.html?utm_source=chatgpt.com"
  );

  page.on("dialog", async (confirm) => {
    expect(confirm.message() === "I am a confirm box!");
    expect(confirm.type() === "confirm");
    await page.waitForTimeout(2000);
    confirm.accept();
  });

  await page.locator("#confirmexample").click();
});

test("JS prompt alert", async ({ page }) => {
  await page.goto(
    "https://testpages.herokuapp.com/styled/alerts/alert-test.html?utm_source=chatgpt.com"
  );

  page.on("dialog", async (prompt) => {
    expect(prompt.message() === "I prompt you");
    expect(prompt.type() === "prompt");
    await page.waitForTimeout(2000);
    prompt.accept("Success");
  });

  await page.locator("#promptexample").click();
});
