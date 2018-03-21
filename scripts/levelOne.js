var levelOne = {
  x: 30,
  y: 469,
  width: 6,
  height: 11,
  platforms: [new Platform(0, 480, 700, 20),
              new Platform(100, 450, 100, 10),
              new Platform(230, 420, 100, 10),
              new Platform(360, 390, 100, 10, 'bounce'),
              new Platform(490, 290, 100, 10)],
  enemies: [new BasicEnemy(250, 414, 12, 6, 330, 230)],
  goal: new Goal(530, 270, 20, 8),
  setPlayer: function() {
    player = new Player(levelOne.x, levelOne.y, levelOne.width, levelOne.height);
  },
}
