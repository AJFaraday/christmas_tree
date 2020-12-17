class Bauble {

  constructor(x, y, size, ctx) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.ctx = ctx;
    this.color = Math.floor(Math.random() * 16777215).toString(16);
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#' + this.color;
    ctx.fill();
  }

}

