import { test, expect } from "@playwright/test";

test("Upload file", async ({ page }) => {
  await page.goto("https://www.file.io/");
  //   await page.getByText("Upload Files").click();
  await page
    .locator("#select-files-input")
    .setInputFiles("/Users/piyushsharma/Downloads/Profile.pdf");
});
