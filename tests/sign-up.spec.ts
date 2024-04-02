import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/SignUpTutorial/);
});

test('Fill in form', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot();
    await page.getByLabel('First name').click();
    await page.getByLabel('First name').fill('Test');
    await page.getByLabel('First name').press('Tab');
    await page.getByLabel('Last name').fill('McTester');
    await page.getByLabel('Last name').press('Tab');
    await page.getByLabel('Email').fill('test@test.com');
    await page.getByLabel('Email').press('Tab');
    await page.getByLabel('Password').fill('Bla1Bla1');
    await page.getByLabel('Password').press('Tab');
    await page.getByTestId('submit-button').press('Enter');
    await expect(page).toHaveScreenshot();
});

test('Error state', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('submit-button').click();
    await expect(page).toHaveScreenshot();
});
