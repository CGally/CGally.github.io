var levelOne = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  powerUp: false,
  platforms: [new Platform(0, 480, 80, 20),
              new Platform(580, 150, 80, 10),
              new Platform(110, 480, 100, 10, 'bounce'),
              new Platform(280, 370, 80, 10, 'bounce'),
              new Platform(430, 260, 80, 10, 'bounce')],
  hazards: [new Lava(80, 490, 620, 10)],
  enemies: [new BasicEnemy(130, 474, 12, 6, 210, 110),
            new BasicEnemy(600, 144, 12, 6, 660, 580),
            new BasicEnemy(390, 260, 6, 12, 390, 390, 310, 200, 'flying')],
  goal: new Goal(610, 130, 20, 8),
  setPlayer: function() {
    player = new Player(levelOne.x, levelOne.y, levelOne.width, levelOne.height);
  },
}
