# Arcade Game Project

## Table of Contents

* [How to Play](#how-to-play)
* [Instructions on How to Make Your Own Game](#instructions-on-how-to-make-your-own-game)

## How to Play

To play the game follow the link for the live version
https://scoopkm.github.io/Arcade-Game/

The game engine creates a 5 column by 6 row gameboard, that is populated by a player character and multiple enemy characters. The player
character is the boy sprite, that you control with the up, down, left, and right keyboard keys. The player character appears in the middle of the bottom grass row, and the enemy characters are the bug sprites that move across the gameboard. The enemy characters appear randomly in the second grass row and all stone rows, and each enemy has a random speed set to them. The goal of the game is to move the player character across the gameboard and successfully reach the water. Once you reach the water the player character will reset to its starting position. Along your way to the water, if the player character runs into an enemy character the player will reset back to its staring position.

## Instructions on How to Make Your Own Game

To get your own starter code click here: https://github.com/udacity/frontend-nanodegree-arcade-game

Once you're at the starter code repository you will want to fork the repository to your personal GitHub. From there you will want to clone/download the forked repository to your local machine, and open `index.html` in the browser to see your arcade game come to live as you make changes to the code.

The starter code comes with an `index.html, style.css, images, app.js`, and `engine.js`. All artwork you will need for this project is contained in the images folder, unless you wish to create a custom image. If you chose to create a custom image, I would add that to the images folder. The main file you will be working in will be `app.js`, and possibly `engine.js`, depending on how you choose to handle collisions between enemy and player characters. You can add more functionalities to the game, such as a pause feature by editing `engine.js` if you choose to. As for `index.html` and `style.css`, you will not have to edit them for the game to work.

<b>IMPORTANT NOTICE:</b> When opening `index.html` for the first time, it will appear blank. This is normal, and you should look to at the errors
in your browser's console log and notes in the starter code to navigate your way on what to do first and eventually display your gameboard.

For more detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).
