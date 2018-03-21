var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    header = document.getElementById("header"),
    start = document.getElementById("start"),
    keys = [],
    platforms,
    player,
    goal,
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
                            window.requestAnimationFrame = requestAnimationFrame;

function render() {
  platforms = levelOne.platforms;
  enemies = levelOne.enemies;
  goal = levelOne.goal;
  levelOne.setPlayer();
};

function step() {
  ctx.clearRect(0, 0, 1100, 700);
  player.render();
  goal.render();
  for(var i = 0; i < platforms.length; i++){
    platforms[i].render();
    var dir = player.colCheck(player, platforms[i]);
    if(dir === "l" || dir === "r") {
      player.velX = 0;
    } else if (dir === "b" && platforms[i].type === 'bounce') {
      player.friction = 0.8;
      if(player.velY * 2 > 10) {
        player.velY = -10;
      } else {
        player.velY *= -2;
      }
    } else if (dir === "b") {
      player.velY = 0;
      player.jumping = false;
      player.friction = 0.8;
    } else if (dir === "t") {
      player.velY = 0;
    }
  }
  for(var i = 0; i < enemies.length; i++){
    enemies[i].render();
    enemies[i].move();
    if (player.colCheck(player, enemies[i])) {
      levelOne.setPlayer();
    }
  }
  player.move();
  if (player.colCheck(player, goal)) {
    window.location = "portfolio.html";
  }
  requestAnimationFrame(step);
}

function gameStart() {
  start.style.display = 'none';
  render();
  step();
};

document.body.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false;
});

window.onload = function() {
  header.textContent = 'Reach the goal to meet Chris Gallagher';
};
