const { test, expect } = require("@playwright/test");

test("Validar titulo", async ({ page }) => {
  //Abre pagina facebook.com
  await page.goto("https://www.facebook.com/");
  //verificacion del titulo exacto
  await expect(page).toHaveTitle("Facebook - log in or sign up");
});

test("Validar titulo con regex (contiene palabra)", async ({ page }) => {
  //Abre pagina facebook.com
  await page.goto("https://www.facebook.com/");
  //verificacion del titulo exacto
  await expect(page).toHaveTitle(/Facebook/);
});

test("Validar titulo chatgpt.com", async ({ page }) => {
  //Abre pagina chatgpt.com
  await page.goto("https://chatgpt.com/");
  //verificacion del titulo exacto
  await expect(page).toHaveTitle("Just a moment...");
});

test("Validar titulo con regex chatgpt.com", async ({ page }) => {
  //Abre pagina chatgpt.com
  await page.goto("https://chatgpt.com/");
  //verificacion del titulo exacto
  await expect(page).toHaveTitle(/(ChatGPT|Just a moment)/);
});
