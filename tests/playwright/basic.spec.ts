import { test, expect } from "@playwright/test";

const homePage: string =
  "http://localhost:5173/solo-adventures/dnd-adventure-website/#/";

test("can load", async ({ page }) => {
  await page.goto(homePage);

  // Expect a title "to contain" a substring.
  await expect(
    page.getByRole("heading", { name: "Choose Your Adventure" }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "The Dark Forest Test - A" }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Goblins beseiging Westwood! A" }),
  ).toBeVisible();
});

test("adventure buttons are clickable", async ({ page }) => {
  await page.goto(homePage);

  await page.getByRole("button", { name: "The Dark Forest Test - A" }).click();
  await expect(page).toHaveURL(homePage + "adventure/test-forest");

  await page.goto(homePage);

  await page
    .getByRole("button", { name: "Goblins beseiging Westwood! A" })
    .click();
  await expect(page).toHaveURL(homePage + "adventure/goblin-westwood");
});
