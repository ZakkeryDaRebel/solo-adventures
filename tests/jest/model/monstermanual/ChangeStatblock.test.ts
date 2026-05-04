import { GuardSpear } from "../../../../src/model/monstermanual/g/Guard";
import { addRace } from "../../../../src/model/monstermanual/AddRace";
import { Race } from "../../../../src/model/race/Race";
import { addLanguages } from "../../../../src/model/monstermanual/AddLanguage";
import { Languages } from "../../../../src/model/statblock/info/Languages";
import { changeName } from "../../../../src/model/monstermanual/ChangeName";

describe("Change Base Statblock for variety", () => {
  test("Can add Race", () => {
    const humanGuard = addRace(GuardSpear, Race.Human);

    expect(humanGuard.descriptionTag).toBe(" (Human)");
  });

  test("Can add 1 Language", () => {
    const bilingualGuard = addLanguages(GuardSpear, [Languages.Halfling]);

    expect(bilingualGuard.languages).toHaveLength(2);
    expect(bilingualGuard.languages).toContain(Languages.Common);
    expect(bilingualGuard.languages).toContain(Languages.Halfling);
  });

  test("Can add multiple Languages", () => {
    const multiLingualGuard = addLanguages(GuardSpear, [
      Languages.Draconic,
      Languages.Dwarvish,
      Languages.Elvish,
    ]);

    expect(multiLingualGuard.languages).toHaveLength(4);
    expect(multiLingualGuard.languages).toContain(Languages.Common);
    expect(multiLingualGuard.languages).toContain(Languages.Draconic);
    expect(multiLingualGuard.languages).toContain(Languages.Dwarvish);
    expect(multiLingualGuard.languages).toContain(Languages.Elvish);
  });

  test("Can add to name", () => {
    const guardOne = changeName(GuardSpear, GuardSpear.name + " #1");

    expect(guardOne.name).toBe("Spear Guard #1");
  });

  test("Can change name", () => {
    const newName: string = "Steve (Spear Guard)";
    const steve = changeName(GuardSpear, newName);

    expect(steve.name).toBe(newName);
  });
});
