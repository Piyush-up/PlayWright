import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/');
  await expect(page.getByRole('heading', { name: 'Hello' })).toBeVisible();
  await page.getByText('Please leave this field emptyGet a FREE XPath cheat sheet by Signing Up for our').click();
});