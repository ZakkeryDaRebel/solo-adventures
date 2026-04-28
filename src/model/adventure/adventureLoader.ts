import { testForestAdventure } from "../../adventures/*test-forest/testForestAdventure";
import { goblinWestwoodAdventure } from "../../adventures/goblin-westwood/goblinWestwoodAdventure";
import type { Adventure } from "./Adventure";

export const adventures: Record<string, Adventure> = {
  [testForestAdventure.meta.id]: testForestAdventure,
  [goblinWestwoodAdventure.meta.id]: goblinWestwoodAdventure,
};
