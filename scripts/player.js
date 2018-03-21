class Player {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 3;
    this.velX = 0;
    this.velY = 0;
    this.friction = 0.8;
    this.jumping = false;
    this.gravity = 0.3;
    this.flying = false;
  }
  move() {
    if (keys[38] || keys[32]) {
        // up arrow or space
        if(this.flying === true) {
          if(this.velY > -6) {
            this.velY -= 0.5;
            this.gravity = 0.2
          }
        } else if(!this.jumping) {
            this.jumping = true;
            this.velY = -this.speed * 1.6;
            this.friction = 0.8;
        }
    }
    if (keys[39]) {
        // right arrow
        if (this.velX < this.speed) {
          this.velX++;
        }
    }
    if (keys[37]) {
      // left arrow
    if (this.velX > -this.speed) {
            this.velX--;
        }
    }

    if(this.velY < 8) {
      this.velY += this.gravity;
    }
    this.velX *= this.friction;
    this.x += this.velX;
    this.y += this.velY;

    if(this.y > canvas.height - this.height) {
      this.y = canvas.height - this.height;
      this.jumping = false;
    } else if(this.y < 0) {
      this.y = 0;
    }
    if(this.x > canvas.width - this.width) {
      this.x = canvas.width - this.width;
    } else if(this.x < 0) {
      this.x = 0;
    }
  }

  colCheck(shapeA, shapeB) {
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
    vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
    hWidths = (shapeA.width / 2) + (shapeB.width / 2),
    hHeights = (shapeA.height / 2) + (shapeB.height / 2),
    colDir = null;
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
      var oX = hWidths - Math.abs(vX),
      oY = hHeights - Math.abs(vY);
      if (oX >= oY) {
        if (vY > 0) {
          colDir = "t";
          shapeA.y += oY;
        } else {
          colDir = "b";
          shapeA.y -= oY;
        }
      } else {
        if (vX > 0) {
          colDir = "l";
          shapeA.x += oX;
        } else {
          colDir = "r";
          shapeA.x -= oX;
        }
      }
    }
    return colDir;
  }

  render() {;
    ctx.fillStyle="red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
};
