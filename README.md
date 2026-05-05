# D&D Adventure Website

## Github Overview

```txt
- .github/workflows             Github Workflows
    \- ci.yml                       CI Pipeline to deploy development to Github Pages

- public                        React Template Images (Might delete later)
    |- favicon.svg
    \- icons.svg

- src                           Source Code
    |- adventures                   All the current adventures on the website
    |   |- goblin-westwood              First adventure written by me (Under Development)
    |   \- test-forest                  ChatGPT originally created and I heavily modified adventure to test functionality during development (Will eventually be an adventure players may actually enjoy once polished)
    |
    |- assets                       React Template Images (Might delete later)
    |   |- hero.png
    |   |- react.svg
    |   \- vite.svg
    |
    |- components                   React Components
    |   |- fight                        React Components for the Fight Page
    |   |   |- BattlefieldGrid.tsx          Component to render the 2D Component (Prints only 1D at the moment)
    |   |   |- CombatantCard.tsx            Component to show a Combatant's HP tracker and a button to reveal their statblock
    |   |   |- DisplayStatblock.tsx         Component to show the information on the Combatant's Statblock
    |   |   \- PlayInitiativeInput.tsx      Component to have the user input their Initiative before the fight starts
    |   |
    |   |- story                        React Components for the Story Page
    |   |   |- ChoiceList.tsx               Component to list all the Choices available for the player
    |   |   |- StoryImage.tsx               Component to render the image for the story
    |   |   |- StoryParagraph.tsx           Component to render basic code for the story with options to italicize and bold some of it as well.
    |   |   |- StoryRevealText.tsx          Component to have a button that once clicked will reveal some text
    |   |   \- StoryTitle.tsx               Component to display a title for the story
    |   |
    |   |- AdventureCard.tsx            A default card shaped button that will display the adventure information on the HomePage
    |   \- ChoiceButton.tsx             A default button to display choices
    |
    |- context                      Code to hold the Game's Context
    |   |- GameContext.ts               Typescript code to do the functionality of the Context
    |   \- GameProvider.tsx             React code to provide hooks for other classes to use the Context
    |
    |- model                        Typescript code, not using React code
    |   |- adventure                    Code regarding adventures
    |   |   |- Adventure.ts                 Template that contains all the meta data (id, title, description, and starting node), in addition to all the story nodes
    |   |   \- AdventureLoader.ts
    |   |
    |   |- dice                         Code regarding dice
    |   |   |- Dice.ts                      Interface for a Dice object, and a DiceConstructor
    |   |   \- DiceRoller.ts                Function to roll the dice, and add modifiers if passed in
    |   |
    |   |- item                         Code to create a list of all the items that can be found during adventures
    |   |   |- armor                        Code relating to Armor (extending from Item)
    |   |   |   |- Armor.ts                     Template Armor object and the ArmorType enum
    |   |   |   |- ArmorConstructor.ts          Function to create an Armor instance
    |   |   |   |- HeavyArmor.ts                Const objects for PHB Heavy Armor
    |   |   |   |- LightArmor.ts                Const objects for PHB Light Armor
    |   |   |   |- MediumArmor.ts               Const objects for PHB Medium Armor
    |   |   |   \- Shield.ts                    Const object for PHB Shield
    |   |   |
    |   |   |- weapons                      Code relating to Weapons (extending from Item)
    |   |   |   |- AttackDamageConstructor.ts   Function to create an AttackDamage instance
    |   |   |   |- MartialMeleeWeapons.ts       Const objects for PHB Martial Melee Weapons
    |   |   |   |- MartialRangedWeapons.ts      Const objects for PHB Martial Ranged Weapons
    |   |   |   |- PHBGuns.ts                   Const objects for PHB Guns
    |   |   |   |- SimpleMeleeWeapons.ts        Const objects for PHB Simple Melee Weapons
    |   |   |   |- SimpleRangedWeapons.ts       Const objects for PHB Simple Ranged Weapons
    |   |   |   |- Weapon.ts                    Template Weapon object with AttackDamage template and WeaponProeprties enum
    |   |   |   \- WeaponConstructor.ts         Function to create a Weapon instance
    |   |   |
    |   |   |- Cost.ts                      Object to hold the value of an item with a Coin Enum
    |   |   |- CostConstructor.ts           Function to create a Cost instance
    |   |   \- Item.ts                      Base type of an Item
    |   |
    |   |- monstermanual                Code regarding all the monsters on the website sorted into packages of the first letter
    |   |   |- g                            G's
    |   |   |   |- Goblin.ts                    Const GoblinWarrior object
    |   |   |   \- Guard.ts                     Const GuardSpear object
    |   |   |
    |   |   |- w                            W's
    |   |   |   \- Wolf.ts                      Const Wolf object
    |   |   |
    |   |   |- AddLanguage.ts               Code to clone a base Statblock and add langauges to the list
    |   |   |- AddRace.ts                   Code to clone a base Statblock and change the description tag (usually for creatures with a Humanoid CreatureType) to an actual Race
    |   |   \- ChangeName.ts                Code to clone a base Statblock and change the name, so we can number enemies or give Allies actual names
    |   |
    |   |- node                         Code regarding nodes or interactable spots during the story
    |   |   |- Choice.ts                    A Choice shows text describing the choice and the node that you go to when selected
    |   |   |- Combatant.ts                 Template class for the information a Combatant needs to be part of a Fight Node
    |   |   |- ContentBlock.ts              Content can come in 4 different forms (title, paragraph, image, or reveal)
    |   |   |- CreateCombatants.ts          Function to turn all the enemies and allies in the Fight Node into Combatants
    |   |   |- FightNodeType.ts             A Node that contains information regarding a fight
    |   |   |- NodeType.ts                  A Node that is the parent type used in Nodes and is either Fight or Story
    |   |   \- StoryNodeType.ts             A Node that contains information regarding a story
    |   |
    |   |- race                         Code regarding the different races
    |   |   \- Race.ts                      Enum for the Races in D&D
    |   |
    |   |- spell                        Code regarding spells
    |   |   \- spell.ts                     Base interface about a spell
    |   |
    |   \- statblock                    Code regarding enemy stat blocks
    |       |- info                         Code regarding information that is on a statblock
    |       |   |- AbilityScores.ts             Enum for the 6 types of Ability Scores
    |       |   |- Action.ts                    Base template class for an Action
    |       |   |- Alignment.ts                 Enum for the 9 types of Alignment
    |       |   |- Condition.ts                 Enum for the 15 types of Conditions
    |       |   |- CreatureType.ts              Enum for the 14 types of Creatures
    |       |   |- Damage.ts                    Enum for the 13 types of Damage
    |       |   |- Languages.ts                 Enum for the Languages that can be found in D&D
    |       |   |- Sense.ts                     Enum for the different Senses that a creature can have
    |       |   |- Size.ts                      Enum for the 6 size classifications of D&D creatures
    |       |   \- Skills.ts                    Enum for the 18 types of Skills (for proficiency)
    |       |
    |       |- DamageStatblock.ts           Extends Statblock to add damage resistances, immunities, and vulnerabilities, in addition to condition immunities
    |       |- LegendaryStatblock.ts        Extends Statblock to add Legendary Reactions and Resistances
    |       |- SpellcasterStatblock.ts      Extends Statblock to add Spellcasting information in
    |       \- Statblock.ts                 Base information that is in all Statblocks (Under development)
    |
    |- pages                        React code for page layout
    |   |- AdventurePage.tsx            Base page to choose between a FightPage or StoryPage
    |   |- FightPage.tsx                Page to set up the layout for a Fight Node
    |   |- HistoryPage.tsx              Page to show the version history of the project
    |   |- HomePage.tsx                 Home page to show all the adventures to choose from
    |   \- StoryPage.tsx                Page to set up the layout for a Story Node
    |
    |- version                      Code about the version history
    |   |- VersionEntry.ts              Template with information regarding a version
    |   \- VersionHistory.ts            List of all the Versions and their changeset from this project
    |
    |- App.css
    |- App.tsx
    |- index.css
    \- main.tsx

- tests                         Tests to ensure my code is working properly
    |- jest                         Jest tests for Typescript
    |   |
    |   \- model                        Most code to test is in the model package
    |       |- dice                         Code to test Dice Constructor and Roller
    |       |   \- DiceRoller.test.ts
    |       |
    |       |- item                         Code to test different objects that extend the Item template
    |       |   |- armor                        Code to test Armor Constructor
    |       |   |   \- ArmorConstructor.test.ts
    |       |   |
    |       |   |- coin                         Code to test Coin / Cost Constructor
    |       |   |   \- CoinConstructor.test.ts
    |       |   |
    |       |   \- weapons                      Code to test Weapon Constructor
    |       |       \- WeaponConstructor.test.ts
    |
    \- playwright                   Playwright tests for React / Frontend user interaction
        |- adventure                    Playwright tests that go through entire adventures
        |   \- testForest.spec.ts           Test all branches of the testForest adventure
        |
        \- basic.spec.ts                Code to test if my home page is loading, and the adventure buttons take you to the right url
```
