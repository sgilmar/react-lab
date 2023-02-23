import { test, expect } from '@playwright/test'
import { CAT_PREFIX_IMAGE_URL } from '../src/constants.js'

const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const fact = await page.getByRole('paragraph')
  const factContent = await fact.textContent()

  await expect(factContent?.length).toBeGreaterThan(0)
  // console.log(fact, factContent)
});

test('app shows random image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const image = await page.getByRole('img')
  const imageSrc = await image.getAttribute('src')

  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
  // console.log(image, imageSrc)
});
