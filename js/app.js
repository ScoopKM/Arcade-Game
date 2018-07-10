document.onmousemove = function(e){
var x = e.pageX;
var y = e.pageY;
e.target.title = "X is "+x+" and Y is "+y;
}

// Enemies our player must avoid
let Enemy = function(Speed, xEStartingPoint, yEStartingPoint) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = xEStartingPoint;
    this.y = yEStartingPoint;
    this.speed = Speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // minSpeed = 50
    maxSpeed = 350
    this.x += this.speed * dt * Math.floor(Math.random() * (maxSpeed - this.speed) + this.speed);
    // need to work on random speed so the minSpeed  actaully sets at 50 and maxSpeed is 350 when including dt

    if (this.x >505) {
      this.x = -500;
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function(xPStartingPoint, yPStartingPoint) {
  this.sprite = 'images/char-boy.png';
  this.x = xPStartingPoint;
  this.y = yPStartingPoint;
};

Player.prototype.update = function(dt) {};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// Player should start at x,y cordinates of 200,400, tihs puts them in the middle of the game board
const player = new Player(200, 400);
const allEnemies = [];
// Enemy speed should be capped at 350 and min 50, so they are neither to fast or to slow
// Enemy min y axis should be 300, or it starts in the player starting area
// const enemy = new Enemy(1, 1, 300);
// allEnemies.push(enemy); //tester code
const gameBoardRows = [300, 200, 100, 0];
const gameBoardColumns = [0, 100, 200, 300, 400];

const enemyStartingRows = gameBoardRows[Math.floor(Math.random() * gameBoardRows.length)];
const enemyStartingColumns = [0, 100, 200, 300, 400];

for (let i = 0; i < 10; i++) {
  minY=300
  maxY=100
  allEnemies.push(new Enemy(1, -300, enemyStartingRows));
  // allEnemies.push(enemy);
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
