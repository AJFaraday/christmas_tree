class Tree {

  constructor(ctx) {
    this.ctx = ctx;
    Tree.body_points = [
      [300,100],
      [100,650],
      [500,650]
    ]
    this.draw_body();
    this.draw_trunk();

  }

  draw_body() {
    this.ctx.beginPath();
    this.ctx.moveTo(Tree.body_points[0][0], Tree.body_points[0][1]);
    this.ctx.lineTo(Tree.body_points[1][0], Tree.body_points[1][1]);
    this.ctx.lineTo(Tree.body_points[2][0], Tree.body_points[2][1]);
    this.ctx.fillStyle = 'rgba(0,255,0,1)';
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.moveTo(300, 100);
    this.ctx.lineTo(175, 650);
    this.ctx.lineTo(425, 650);
    this.ctx.fillStyle = 'rgba(0,255,0,0.5)';
    //this.ctx.fill();
  }

  draw_trunk() {
    this.ctx.beginPath();
    this.ctx.fillStyle = '#aa2222';
    this.ctx.rect(250, 650, 100, 100);
    this.ctx.fill();
  }

}