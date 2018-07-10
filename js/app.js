// Enemies our player must avoid
let Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = enemyStartingColumns[Math.floor(Math.random() * enemyStartingColumns.length)];
    this.y = enemyStartingRows[Math.floor(Math.random() * enemyStartingRows.length)];
    this.speed = Math.floor(Math.random() * (450 - 100) + 100);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    if (this.x >505) {
      this.x = -500;
    };

    if (player.x < this.x + 50 &&
        player.x + 50 > this.x &&
        player.y < this.y + 42 &&
        42 + player.y > this.y) {
        player.x = 200;
        player.y = 380;
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function(Speed, xPStartingPoint, yPStartingPoint) {
  this.sprite = 'images/char-boy.png';
  this.speed = Speed;
  this.x = xPStartingPoint;
  this.y = yPStartingPoint;
};

Player.prototype.update = function(dt) {
   this.speed = this.speed * dt;
};

Player.prototype.handleInput = function(allowedKeys) {
  switch (allowedKeys) {
    case 'left':
      if (this.x > 0) {
        this.x -= 100;
      }
      break;
    case 'right':
      if (this.x < 400) {
       this.x += 100;
      }
      break;
    case 'up':
      if (this.y > -10) {
        this.y -= 85;
      }
      break;
    case 'down':
      if (this.y < 330 ) {
        this.y += 85;
    }
  }
};


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// Player should start at x,y cordinates of 200,400, tihs puts them in the middle of the game board
const player = new Player(5, 200, 400);
// player moves up and down at 85, and left to right at 100
const allEnemies = [];

const gameBoardRows = [310, 225, 140, 55, -30];
const gameBoardColumns = [0, 100, 200, 300, 400];
const enemyStartingRows = [310, 225, 145, 60];
const enemyStartingColumns = [-200, -300, -400];

for (let i = 0; i < 6; i++) {
  allEnemies.push( new Enemy());
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
