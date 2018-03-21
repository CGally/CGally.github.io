class BasicEnemy {
  constructor(x, y, width, height, maxX, minX, maxY, minY, type) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.maxX = maxX;
    this.minX = minX;
    this.maxY = maxY;
    this.minY = minY;
    this.type = type;
    if(type === 'flying') {
      this.speed = 0.45;
    } else {
      this.speed = 0.3;
    }
  }
  move() {
    if(this.type === 'flying') {
      this.y += this.speed;
      if(this.y < this.minY) {
        this.speed *= -1;
      } else if(this.y + this.height > this.maxY) {
        this.speed *= -1;
      }
    } else {
      this.x += this.speed
      if(this.x < this.minX) {
        this.speed *= -1
      } else if(this.x + this.width > this.maxX) {
        this.speed *= -1
      }
    }
  }

  render() {;
    ctx.fillStyle="purple";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
};
