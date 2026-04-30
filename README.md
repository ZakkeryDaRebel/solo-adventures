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
    |   \- test-forest                 ChatGPT and I created adventure to test functionality during development
    |
    |- assets                       React Template Images (Might delete later)
    |   |- hero.png
    |   |- react.svg
    |   \- vite.svg
    |
    |- components                   React Components
    |   |- AdventureCard.tsx            A default card shaped button that will display the adventure information on the HomePage
    |   |- ChoiceButton.tsx             A default button to display choices
    |   \- StoryNode.tsx                A component to display all the different kinds of story information available (Need to break this apart)
    |
    |- model                        Typescript code, not using React code
    |   |- adventure                    Code regarding adventures
    |   |   |- Adventure.ts                 Template that contains all the meta data (id, title, description, and starting node), in addition to all the story nodes
    |   |   \- AdventureLoader.ts
    |   |
    |   |- dice                         Code regarding dice
    |   |   |- Dice.ts                      Interface for a Dice object, and a DiceConstructor
    |   |   \- DiceRoller.ts                Function to roll the dice
    |   |
    |   |- item                         Code to create a list of all the items that can be found during adventures
    |   |   |- armor                        Code relating to Armor (extending from Item)
    |   |   |   |- Armor.ts                     Template Armor object and the ArmorType enum
    |   |   |   |- ArmorConstructor.ts          Function to create an Armor instance
    |   |   |   \- Shield.ts                    Const Shield object
    |   |   |
    |   |   |- weapons                      Code relating to Weapons (extending from Item)
    |   |   |   |- SimpleMeleeWeapons           Const objects for PHB Simple Melee Weapons
    |   |   |   |- Weapon.ts                    Template Weapon object with AttackDamage template and WeaponProeprties enum
    |   |   |   \- WeaponConstructor.ts         Function to create a Weapon instance
    |   |   |
    |   |   |- Cost.ts                      Object to hold the value of an item with a Coin Enum
    |   |   \- Item.ts                      Base type of an Item
    |   |
    |   |- monstermanual                Code regarding all the monsters on the website
    |   |   \- Goblin.ts                    Const GoblinWarrior object
    |   |
    |   |- node                         Code regarding nodes or interactable spots during the story
    |   |   |- Choice.ts                    A Choice shows text describing the choice and the node that you go to when selected
    |   |   |- ContentBlock.ts              Content can come in 4 different forms (title, paragraph, image, or reveal)
    |   |   |- FightNodeType.ts             A Node that contains information regarding a fight
    |   |   |- NodeType.ts                  A Node that is the parent type used in Nodes and is either Fight or Story
    |   |   \- StoryNodeType.ts             A Node that contains information regarding a story
    |   |
    |   |- spell                        Code regarding spells
    |   |   \- spell.ts                     Base interface about a spell
    |   |
    |   \- statblock                    Code regarding enemy stat blocks
    |       |- info                         Code regarding information that is on a statblock
    |       |   |- AbilityScores.ts             Enum for the 6 types of Ability Scores
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
    |   |- AdventurePage.tsx            Base page to choose between a FightPage or StoryNode (Need to make this a StoryPage instead)
    |   |- FightPage.tsx                Page to set up the layout for a fight
    |   \- HomePage.tsx                 Home page to show all the adventures to choose from
    |
    |- App.css
    |- App.tsx
    |- index.css
    \- main.tsx

- tests                         Tests to ensure my code is working properly
    |- jest                         Jest tests for Typescript
    |   |- armor                        Code to test Armor Constructor
    |   |   \- ArmorConstructor.test.ts
    |   |
    |   |- dice                         Code to test Dice Constructor and Roller
    |   |   \- DiceRoller.test.ts
    |   |
    |   \- weapons                      Code to test Weapon Constructor
    |       \- WeaponConstructor.test.ts
    |
    \- playwright                   Playwright tests for React / Frontend user interaction
        \- example.spec.ts              Code to test if my home page is loading, the adventure buttons take you to the right url, and going through the whole test adventure

```
