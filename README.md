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
    |   |- *test-forest                 ChatGPT and I created adventure to test functionality during development
    |   \- goblin-westwood              First adventure written by me (Under Development)
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
    |   |- node                         Code regarding nodes or interactable spots during the story
    |   |   |- Choice.ts                    A Choice shows text describing the choice and the node that you go to when selected
    |   |   |- ContentBlock.ts              Content can come in 4 different forms (title, paragraph, image, or reveal)
    |   |   |- FightNodeType.ts             A Node that contains information regarding a fight
    |   |   |- NodeType.ts                  A Node that is the parent type used in Nodes and is either Fight or Story
    |   |   \- StoryNodeType.ts             A Node that contains information regarding a story
    |   |
    |   \- statblock                    Code regarding enemy stat blocks
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
```
