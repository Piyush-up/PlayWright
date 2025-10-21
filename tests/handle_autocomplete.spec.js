import test, { expect } from "@playwright/test";

test("autocomplete feature", async ({ page }) => {
  await page.goto("https://in.search.yahoo.com/?fr2=inr");
  await page.getByPlaceholder("Search the web").fill("Playwright");
  await expect(page.getByRole("listbox")).toBeVisible();
  const options = await page.$$("//li[contains(@id,'sa-item')]");
  console.log(options);

  for (let i = 0; i < options.length; i++) {
    const element = await options[i].textContent();
    console.log(element);
    if (element.includes("tutorial")) {
      await options[i].click();
      return;
    }
  }
});
