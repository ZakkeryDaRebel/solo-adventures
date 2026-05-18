# D&D Adventure Website

## Github Overview

```txt
- .github/workflows             Github Workflows
    \- ci.yml                       CI Pipeline to deploy development to Github Pages

- public                        React Template Images (Might delete later)
    |- favicon.svg                  (used in index.html as tab icon)
    \- icons.svg

- src                           Source Code
    |- app                          Main App Code
    |   |- providers                    React Provider Code
    |   |   \- GameProvider.tsx             Provides Environmental / Global variables for the React state code
    |   |
    |   |- App.css
    |   |- App.tsx
    |   |- index.css
    |   \- main.tsx
    |
    |- assets                       React Template Images (Might delete later)
    |   |- hero.png
    |   |- react.svg
    |   \- vite.svg
    |
    |- content                      Static / Constant code data (implementations of interfaces)
    |   |- adventures                   Already created Adventures
    |   |   |- dark-forest                  Dark Forest Adventure code
    |   |   |   \- DarkForestAdventure.ts
    |   |   |
    |   |   |- goblin-westwood              Goblin Westwood Adventure code
    |   |   |   \- GoblinWestwoodAdventure.ts
    |   |   |
    |   |   \- index.ts                     Barrell file to export all the adventure information
    |   |
    |   \- dnd-data                     D&D Data
    |       |- armor                        Armor objects
    |       |   |- HeavyArmor.ts                D&D Heavy Armor
    |       |   |- LightArmor.ts                D&D Light Armor
    |       |   |- MediumArmor.ts               D&D Medium Armor
    |       |   \- Shield.ts                    D&D Shield
    |       |
    |       |- monster-manual               Creature objects
    |       |   |- g                            Names starting with 'G'
    |       |   |   |- Goblin                       D&D Goblin (Warrior)
    |       |   |   \- Guard                        D&D Gaurd (Spear)
    |       |   |
    |       |   \- w                            Names starting with 'W'
    |       |       \- Wolf                         D&D Wolf
    |       |
    |       |- weapons                      Weapon objects
    |       |   |- MartialMeleeWeapons.ts       D&D Martial Melee Weapons
    |       |   |- MartialRangedWeapons.ts      D&D Martial Ranged Weapons
    |       |   |- PHBGuns.ts                   D&D Player's Handbook Guns
    |       |   |- SimpleMeleeWeapons.ts        D&D Simple Melee Weapons
    |       |   \- SimpleRangedWeapons.ts       D&D Simple Ranged Weapons
    |       |
    |       \- index.ts                     Barrel file to export all the D&D hard coded implementation information
    |
    |- dice                         Code for dice
    |   |- Dice.ts                      Interface
    |   |- DiceConstructor.ts           Constructor for Dice
    |   |- DiceRoller.ts                Function to roll dice
    |   \- index.ts                     Barrel file to export all the dice information
    |
    |- dnd-rules                    Code for D&D
    |   |- actions                      Code for actions
    |   |   \- Action.ts                    Interface
    |   |
    |   |- creatures                    Code for creatures
    |   |   |- Alignment.ts                 Enum
    |   |   |- CreatureType.ts              Enum
    |   |   |- Langauges.ts                 Enum
    |   |   |- Sense.ts                     Enum
    |   |   \- Size.ts                      Enum
    |   |
    |   |- customization                Code to change a D&D Statblock
    |   |   |- AddLanguage.ts               Function to add Languages
    |   |   |- AddRace.ts                   Function to add Race to a Humanoid creature
    |   |   \- ChangeName.ts                Function to change the creatures name for diversity
    |   |
    |   |- damage                       Code about damage
    |   |   |- AttackDamage.ts              Interface
    |   |   |- AttackDamageConstructor.ts   Constructor for AttackDamage
    |   |   \- Damage.ts                    Enum
    |   |
    |   |- effects                      Code about effects like conditions
    |   |   \- Condition.ts                 Enum
    |   |
    |   |- items                        Code about items
    |   |   |- armor                        Code about armor
    |   |   |   |- Armor.ts                     Interface extends Item
    |   |   |   |- ArmorConstructor.ts          Constructor for Armor
    |   |   |   \- ArmorType.ts                 Enum
    |   |   |
    |   |   |- weapons                      Code about weapons
    |   |   |   |- Weapon.ts                    Interface extends Item
    |   |   |   |- WeaponConstructor.ts         Constructor for Weapons
    |   |   |   |- WeaponMastery.ts             Enum
    |   |   |   \- WeaponProperties.ts          Enum
    |   |   |
    |   |   |- Coin.ts                      Enum
    |   |   |- Cost.ts                      Interface
    |   |   \- CostConstructor.ts           Constructor for Cost
    |   |
    |   |- races                        Code for races
    |   |   \- Race.ts                      Enum
    |   |
    |   |- spells                       Code for spells
    |   |   |- AttackSpell.ts               Interface extends Spell
    |   |   |- Components.ts                Enum
    |   |   |- Spell.ts                     Interface
    |   |   |- SpellSchool.ts               Enum
    |   |   \- UpcastSpell.ts               Interface extends Spell
    |   |
    |   |- statblocks                   Code for statblocks
    |   |   |- DamageStatblock.ts           Interface extends DNDStatblock
    |   |   |- DNDStatblock                 Interface
    |   |   |- LegendaryStatblock.ts        Interface extends DNDStatblock
    |   |   \- SpellcasterStatblock.ts      Interface extends DNDStatblock
    |   |
    |   |- stats                        Code about stats
    |   |   |- AbilityScores.ts             Enum
    |   |   |- CalculateModifier.ts         Function to calculate the modifier of a ability score number
    |   |   |- CalculateSkillModifier.ts    Function to calculate the modifier for a skill by checking to see if it is proficient and stored already or calling calculateModifier
    |   |   \- Skills.ts                    Enum
    |   |
    |   \- index.ts                     Barrel file export all the D&D information
    |
    |- features                     Code that has been separated out by its feature
    |   |- adventure                    Adventure feature code
    |   |   |- components                   React .tsx code for the adventure feature
    |   |   |   \- AdventureCard.tsx            Component for a car holding basic information about an Adventure
    |   |   |
    |   |   |- model                        Typescript model code for the adventure feature
    |   |   |   |- Adventure.ts                 Interface
    |   |   |   \- AdventureLoader.ts           Constant variable that laods all the adventures in the content/adventure package into a format to be displayed on the HomePage
    |   |   |
    |   |   |- pages                        React code for the pages relating to the Adventure feature
    |   |   |   |- AdventurePage.tsx            Page to display node's information after determining if it is a Fight or Story Type
    |   |   |   \- HomePage.tsx                 Page to show all the available Adventures a player can play
    |   |   |
    |   |   \- index.ts                     Barrel file to export all the adventure feature's information
    |   |
    |   |- fight                        Fight feature code
    |   |   |- components                   React .tsx code for the fight feature
    |   |   |   |- BattlefieldGrid.tsx          Component to create a 2D Battlefield Grid (Currently only prints 1D)
    |   |   |   |- CombatantCard.tsx            Component to track a combatant's HP
    |   |   |   |- DisplayStatblock.tsx         Component to display all the information on a combatant's statblock
    |   |   |   \- PlayerInitiativeInput.tsx    Component to have the player input their initiative
    |   |   |
    |   |   |- model                        Typescript model code for the fight feature
    |   |   |   |- Combatant.ts                 Interface
    |   |   |   |- CreateCombatants.ts          Function to take the allies and enemeis, roll their initiative, and put them into one combatant list
    |   |   |   |- FightNodeType                Interface
    |   |   |   \- Side.ts                      Enum
    |   |   |
    |   |   |- pages                        React code for the pages relating to the fight feature
    |   |   |   \- FightPage.tsx                Page to display all the information for the fight
    |   |   |
    |   |   \- index.ts                     Barrel file to export all the fight feature's information
    |   |
    |   |- game-state                   Game Context / State feature code (to hold environmental variables)
    |   |   |- GameContext.ts               Function to use and create the GameState
    |   |   |- GameState.ts                 Interface
    |   |   \- index.ts                     Barrel file to export all the game state feature's information
    |   |
    |   |- story                        Story feature code
    |   |   |- components                   React .tsx code for the story feature
    |   |   |   |- ChoiceList.tsx               Component to show a list of choices
    |   |   |   |- StoryImage.tsx               Component to display an image
    |   |   |   |- StoryParagraph.tsx           Component to display a paragraph of text
    |   |   |   |- StoryRevealText.tsx          Component to show a button that once clicked will reveal some text
    |   |   |   \- StoryTitle.tsx               Component to display a title
    |   |   |
    |   |   |- model                        Typescript model code for the story feature
    |   |   |   |- Choice.ts                    Interface
    |   |   |   |- ContentBlock.ts              Type for what content should be in a Story Node
    |   |   |   |- FormatText.ts                Function to add italics and bold text formating
    |   |   |   \- StoryNodeType.ts             Interface
    |   |   |
    |   |   |- pages                        React code for the pages relating to the story feature
    |   |   |   \- StoryPage.tsx                Page to display all the information for a story
    |   |   |
    |   |   \- index.ts                     Barrel file to export all the story information
    |   |
    |   \- version-history              Version history code
    |       |- model                        Typescript model code for the version history feature
    |       |   |- VersionEntry.ts              Interface
    |       |   \- VersionHistory.ts            Const variable that is updated to store all the information related to all the versions in the history of this project
    |       |
    |       \- pages                        React code for the pages relating to the version history feature
    |           \- HistoryPage.tsx              Page to display all the information for the project's version history
    |
    \- shared                       Code that would relate to more than one feature
        |- components                   React .tsx code for multiple features
        |   \- ChoiceButton.tsx             Component to display a Choice Button
        |
        |- types                        Typescript code to hold interfaces, enums, or types for mupltiple features
        |   \- NodeType.ts                  Type of Node
        |
        |- utils                        Empty package but will hold any other utility information / classes for multiple features
        |
        \- index.ts                     Barrel file to export all the shared information

- tests                         Code to hold all the tests
    |- jest                         Jest tests for model and function logic
    |   |- dice                         Dice tests
    |   |   \- Dice.test.ts
    |   |
    |   \- dnd-rules                    D&D tests
    |       |- customization                D&D Statblock customization functions tests
    |       |   \- Customization.test.ts
    |       |
    |       |- damage                       D&D Damage tests
    |       |   \- AttackDamageConstructor.test.ts
    |       |
    |       |- item                     D&D Item tests
    |       |   |- armor                    D&D Armor tests
    |       |   |   \- ArmorConstructor.test.ts
    |       |   |
    |       |   |- cost                     D&D Cost tests
    |       |   |   \- CostConstructor.test.ts
    |       |   |
    |       |   \- weapons                  D&D Weapons tests
    |       |       \- WeaponConstructor.test.ts
    |       |
    |       \- stats                    D&D Stats tests
    |           |- CalculateModifier.test.ts
    |           \- CalculateSkillModifier.test.ts
    |
    \- playwright                   Playwright tests for frontend react functionality
        |- adventure                   Adventure tests for checking all the branches
        |   \- darkForest.spec.ts
        |
        \- basic.spec.ts                Basic test to check if the home page is loading and adventure cards bring you to the right URL

```
