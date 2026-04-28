import type { Adventure } from "../../model/adventure/Adventure";

export const testForestAdventure: Adventure = {
  meta: {
    id: "test-forest",
    title: "The Dark Forest",
    description: "Test - A classic fantasy adventure",
    startNode: "start",
  },
  story: {
    start: {
      type: "story",
      content: [
        { type: "title", text: "The Beginning" },
        {
          type: "paragraph",
          text: "You wake up in the morning, feeling refeshed and ready for the day, and that's when you know, today is going to be the day you officially become an adventurer! You grab your gear, double check you have everything, and set off, ready to complete your first adventure. And what better place to start your adventure, than the forest out back, so you make your way into the forest, ready for whatever comes.",
        },
      ],
      choices: [{ text: "Enter the forest!", next: "enter" }],
    },
    enter: {
      type: "story",
      content: [
        { type: "title", text: "The Dark Forest" },
        { type: "paragraph", text: "You step into the forest." },
        { type: "paragraph", text: "The air is *cold* and **quiet**." },
        { type: "image", src: "https://picsum.photos/600/300" },
        {
          type: "reveal",
          text: "Look closer at the ground",
          revealText: "You find strange claw marks in the dirt.",
        },
      ],
      choices: [
        { text: "Follow the tracks", next: "tracks" },
        { text: "Run away", next: "start" },
      ],
    },
    tracks: {
      type: "story",
      content: [
        {
          type: "paragraph",
          text: "While you walk forward, you realize that these are wolf tracks, and sure enough, you encounter a wolf! Oh no! Roll for initiative!",
        },
      ],
      choices: [{ text: "I got higher than a -5", next: "fight_wolf" }],
    },
    fight_wolf: {
      type: "fight",
      enemy: "Wolf",
      enemyHP: 12,
      enemyHitDC: 10,
      enemyAttack: 4,
      battlefield: [
        ["_", "W", "_"],
        ["_", "_", "_"],
        ["_", "P", "_"],
      ],
      winNode: "afterWolf",
      loseNode: "death",
    },

    afterWolf: {
      type: "story",
      content: [
        { type: "title", text: "Victory!" },
        { type: "paragraph", text: "You defeated the wolf!" },
      ],
      choices: [{ text: "Continue", next: "cave" }],
    },

    cave: {
      type: "story",
      content: [{ type: "paragraph", text: "Treasure! You win." }],
      choices: [{ text: "Home Page", next: "home-page" }],
    },

    death: {
      type: "story",
      content: [{ type: "paragraph", text: "You died." }],
      choices: [{ text: "Home Page", next: "home-page" }],
    },
  },
};
