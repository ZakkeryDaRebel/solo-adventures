import { test, expect } from "@playwright/test";

const homePage: string =
  "http://localhost:5173/solo-adventures/dnd-adventure-website/#/";

const adventurePage: string = homePage + "adventure/test-forest/";

test("test adventure main path", async ({ page }) => {
  await page.goto(adventurePage);

  // Start node
  await expect(
    page.getByRole("heading", { name: "The Beginning" }),
  ).toBeVisible();
  await expect(page.getByText("You wake up in the morning,")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Enter the forest!" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Enter the forest!" }).click();

  // Enter node
  await expect(page).toHaveURL(adventurePage + "enter");
  await expect(
    page.getByRole("heading", { name: "The Dark Forest" }),
  ).toBeVisible();
  await expect(page.getByText("You step into the forest.")).toBeVisible();
  await expect(page.getByText("cold")).toBeVisible();
  await expect(page.getByRole("img")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Look closer at the ground" }),
  ).toBeVisible();
  await expect(page.getByText("You find strange claw marks")).not.toBeVisible();
  await page.getByRole("button", { name: "Look closer at the ground" }).click();
  await expect(
    page.getByRole("button", { name: "Look closer at the ground" }),
  ).not.toBeVisible();
  await expect(page.getByText("You find strange claw marks")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Follow the tracks" }),
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Run away" })).toBeVisible();
  await page.getByRole("button", { name: "Follow the tracks" }).click();

  // Tracks Node
  await expect(page).toHaveURL(adventurePage + "tracks");
  await expect(page.getByText("While you walk forward, you")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Roll for initiative!" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Roll for initiative!" }).click();

  // Fight Wolf Node
  await expect(page).toHaveURL(adventurePage + "fight_wolf");

  await expect(
    page.getByRole("heading", { name: "Roll Initiative" }),
  ).toBeVisible();
  await expect(page.getByText("Enter your initiative result:")).toBeVisible();
  await expect(page.getByPlaceholder("ex:")).toBeVisible();
  await expect(page.getByRole("button", { name: "Start Fight" })).toBeVisible();
  await page.getByPlaceholder("ex:").fill("100");

  await page.getByRole("button", { name: "Start Fight" }).click();

  await expect(page.getByRole("heading", { name: "Combat" })).toBeVisible();

  await expect(page.getByText("Wolf #2", { exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "+" }).first()).toBeVisible();
  await expect(page.getByText("HP").first()).toBeVisible();
  await expect(page.getByRole("button", { name: "-" }).first()).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Reveal Statblock" }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Reveal Statblock" }).nth(1),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Reveal Statblock" }).nth(2),
  ).toBeVisible();
  await page.getByRole("button", { name: "Reveal Statblock" }).first().click();
  await page.getByRole("button", { name: "Reveal Statblock" }).first().click();
  await page.getByRole("button", { name: "Reveal Statblock" }).first().click();
  await expect(page.getByText("Wolf #").nth(4)).toBeVisible();
  await expect(page.getByText("AC: 13").nth(1)).toBeVisible();
  await expect(page.getByText("Initiative: 2").nth(1)).toBeVisible();
  await expect(page.getByText("Speed: 40").nth(1)).toBeVisible();
  await expect(page.getByText("CR: 1/").nth(1)).toBeVisible();
  await expect(
    page.getByText("Ability ScoresSTR 12DEX 15CON").nth(1),
  ).toBeVisible();
  await expect(
    page.getByText("Actions• Bite. Melee Weapon").nth(1),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Hide Statblock" }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Hide Statblock" }).nth(1),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Hide Statblock" }).nth(2),
  ).toBeVisible();
  await page.getByRole("button", { name: "Hide Statblock" }).first().click();
  await page.getByRole("button", { name: "Hide Statblock" }).first().click();
  await page.getByRole("button", { name: "Hide Statblock" }).first().click();
  await expect(page.getByText("Wolf #1", { exact: true })).toBeVisible();
  await expect(page.getByText("Wolf #1+ HP 11 -Reveal")).toBeVisible();
  await expect(page.getByText("Spear Guard+ HP 11 -Reveal")).toBeVisible();
  await expect(page.getByRole("button", { name: "End Turn" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Player is dead" }),
  ).toBeVisible();

  await expect(page.getByRole("button", { name: "End Turn" })).toBeVisible();
  await page.getByRole("button", { name: "End Turn" }).click();
  await expect(page.getByText("• Wolf #2: Bite. Melee Weapon")).toBeVisible();
  await expect(page.getByText("• Wolf #1: Bite. Melee Weapon")).toBeVisible();
  await expect(page.getByText("• Spear Guard: Spear (One")).toBeVisible();
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 11; i++) {
      await page.getByRole("button", { name: "-" }).first().click();
    }
    await page.getByRole("button", { name: "Remove from combat" }).click();
  }
  await expect(
    page.getByRole("button", { name: "All enemies are dead" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "All enemies are dead" }).click();

  // After Wolf Node
  await expect(page).toHaveURL(adventurePage + "afterWolf");
  await expect(page.getByRole("heading", { name: "Victory!" })).toBeVisible();
  await expect(page.getByText("You defeated the wolf!")).toBeVisible();
  await expect(page.getByRole("button", { name: "Continue" })).toBeVisible();
  await page.getByRole("button", { name: "Continue" }).click();

  // Cave Node
  await expect(page).toHaveURL(adventurePage + "cave");
  await expect(page.getByText("Treasure! You win.")).toBeVisible();
  await expect(page.getByRole("button", { name: "Home Page" })).toBeVisible();
  await page.getByRole("button", { name: "Home Page" }).click();

  await expect(page).toHaveURL(homePage);
});

test("test adventure run away and die paths", async ({ page }) => {
  await page.goto(adventurePage);

  // Start node
  await expect(
    page.getByRole("button", { name: "Enter the forest!" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Enter the forest!" }).click();

  // Enter node
  await expect(page).toHaveURL(adventurePage + "enter");
  await expect(page.getByRole("button", { name: "Run away" })).toBeVisible();
  await page.getByRole("button", { name: "Run away" }).click();

  // Start Node
  await expect(page).toHaveURL(adventurePage + "start");
  await expect(
    page.getByRole("heading", { name: "The Beginning" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Enter the forest!" }).click();

  // Enter Node
  await expect(page).toHaveURL(adventurePage + "enter");
  await expect(page.getByRole("button", { name: "Run away" })).toBeVisible();
  await page.getByRole("button", { name: "Follow the tracks" }).click();

  // Tracks Node
  await expect(page).toHaveURL(adventurePage + "tracks");
  await expect(
    page.getByRole("button", { name: "Roll for initiative!" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Roll for initiative!" }).click();

  // Fight Wolf (Initiative) Node
  await expect(page).toHaveURL(adventurePage + "fight_wolf");
  await expect(page.getByPlaceholder("ex:")).toBeVisible();
  await page.getByPlaceholder("ex:").fill("-5");
  await expect(page.getByRole("button", { name: "Start Fight" })).toBeVisible();
  await page.getByRole("button", { name: "Start Fight" }).click();

  // Fight Wolf Node
  await expect(
    page.getByRole("button", { name: "Player is dead" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Player is dead" }).click();

  // Death Node
  await expect(page).toHaveURL(adventurePage + "death");
  await expect(page.getByText("You died.")).toBeVisible();
  await expect(page.getByRole("button", { name: "Home Page" })).toBeVisible();
  await page.getByRole("button", { name: "Home Page" }).click();

  // Home Page
  await expect(page).toHaveURL(homePage);
});
