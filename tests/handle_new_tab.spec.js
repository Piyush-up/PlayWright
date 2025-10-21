import test from "@playwright/test";

test("handle opening new tab", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://freelance-learn-automation.vercel.app/login");
  await page.waitForTimeout(2000);

  const [page2] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("(//a[contains(@href,'facebook')])[1]").click(),
  ]);

  await page2.waitForLoadState("domcontentloaded");

  await page2.locator("(//input[@name='email'])[2]").fill("email@gmail.com");
  //   await page2.waitForTimeout(4000);

  await page.bringToFront();
  //   await page.waitForTimeout(2000);
  await page.getByPlaceholder("Enter Email").fill("email.com");
  await page.getByPlaceholder("Enter Password").fill("emial@123");
  //   await page.waitForTimeout(2000);

  await page2.bringToFront();
  //   await page.waitForTimeout(2000);
  await page2.locator("(//input[@name='pass'])[2]").fill("password");
  //   await page2.waitForTimeout(2000);

  await page2.close();
});
