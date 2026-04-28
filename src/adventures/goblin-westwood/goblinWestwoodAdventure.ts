import type { Adventure } from "../../model/adventure/Adventure";

export const goblinWestwoodAdventure: Adventure = {
  meta: {
    id: "goblin-westwood",
    title: "Goblins beseiging Westwood!",
    description: "A Solo D&D Adventure for a level 1 player",
    startNode: "intro",
  },
  story: {
    intro: {
      type: "story",
      content: [{ type: "paragraph", text: "Nothing going on at the moment" }],
      choices: [{ text: "Home Page", next: "home-page" }],
    },
  },
};
