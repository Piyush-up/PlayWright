import test from "@playwright/test";

test("handle iframe", async ({ page }) => {
  await page.goto("https://docs.oracle.com/javase/8/docs/api/");
  // first locate an iframe
  // 1st way
  const frame1 = page.frameLocator("//frame[@name='packageListFrame']");
  // 2nd way
  const frame2 = page.frame("packageListFrame");
  // 3rd way
  const frame3 = page.frame({
    url: "https://docs.oracle.com/javase/8/docs/api/overview-frame.html",
  });
  await frame3.getByText("java.applet").click();
});
