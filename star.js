class Star {

  constructor(x, y, size, ctx) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.ctx = ctx;
    ctx.beginPath();
    //top
    ctx.moveTo(x, (y - size));
    //inner
    ctx.lineTo((x + (size * 0.3)), (y - (size * 0.3)));
    // right
    ctx.lineTo((x + size), y);
    //inner
    ctx.lineTo((x + (size * 0.4)), (y + (size * 0.2)));
    // low right
    ctx.lineTo((x + (size * 0.6)), (y + (size * 1.1)));
    //inner
    ctx.lineTo(x, (y + (size * 0.4)));
    // low left
    ctx.lineTo((x - (size * 0.6)), (y + (size * 1.1)));
    //inner
    ctx.lineTo((x - (size * 0.4)), (y + (size * 0.2)));
    // left
    ctx.lineTo((x - size), y);
    //inner
    ctx.lineTo((x - (size * 0.3)), (y - (size * 0.3)));
    ctx.fillStyle = '#FFFF00';
    ctx.fill();
  }

}

