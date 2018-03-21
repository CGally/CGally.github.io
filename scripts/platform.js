class Platform {
  constructor(x, y, width, height, type) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
  }

  render() {
    if(this.type === 'bounce') {
      ctx.fillStyle = "#b45f09";
    } else {
      ctx.fillStyle = "black";
    }
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
};
