class Tinsel {

  // [[x,y], [x,y]]
  constructor(points, width, ctx) {
    this.color = Math.floor(Math.random() * 16777215).toString(16);
    ctx.lineWidth = width;
    ctx.strokeStyle = '#' + this.color;
    ctx.beginPath();
    ctx.moveTo(points[0],points[1]);
    ctx.bezierCurveTo(...points);
    ctx.stroke();
  }

}

