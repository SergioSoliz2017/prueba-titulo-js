const { test, expect } = require("@playwright/test");

const casos = [
  {
    name: "Caso 1",
    url: "https://www.facebook.com/",
    esperado: "Facebook - log in or sign up",
  },
  { name: "Caso 2", url: "https://www.facebook.com/", esperado: /Facebook/ },
  { name: "Caso 3", url: "https://chatgpt.com/", esperado: "Just a moment..." },
  {
    name: "Caso 4",
    url: "https://chatgpt.com/",
    esperado: /(ChatGPT|Just a moment)/,
  },
];

for (const { name, url, esperado } of casos) {
  test(`valida el titulo correcto en ${name}`, async ({ page }) => {
    await page.goto(url);
    await expect(page).toHaveTitle(esperado);
  });
}
