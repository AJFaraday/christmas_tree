Christmas = {

  // initialize
  sparkle: function () {
    var canvas = document.getElementById("christmas_tree");
    this.ctx = canvas.getContext("2d");
    this.baubles = [];
    this.tree = new Tree(this.ctx);
    this.bedeck();

    canvas.addEventListener('click', event => {
      let bound = canvas.getBoundingClientRect();

      let x = event.clientX - bound.left - canvas.clientLeft;
      let y = event.clientY - bound.top - canvas.clientTop;

      console.info(x + ':' + y)
    });

  },

  // add_decorations
  bedeck: function () {
    this.add_tinsel();
    this.add_baubles();
    this.add_star();
  },

  add_star: function () {
    new Star(300, 100, 50, this.ctx);
    // some small stars
    Array(20).fill().forEach(function () {
      var x = 100 + Math.floor(Math.random() * 400);
      var y = 100 + Math.floor(Math.random() * 550);
      if (Utils.inside([x, y], Tree.body_points)) {
        new Star(x, y, (Math.random() * 15), Christmas.ctx);
      }
    });
  },

  add_tinsel: function () {
    Array(100).fill().forEach(function () {
      var no_points = Math.floor(Math.random() * 3) + 3;
      console.log(no_points);
      var points = Array(no_points).fill().map(
        function () {
          var x = 100 + Math.floor(Math.random() * 400);
          var y = 100 + Math.floor(Math.random() * 550);
          return [x, y];
        }
      )
      var tinsel_on_tree = points.every(function (point) {
        return Utils.inside(point, Tree.body_points)
      });
      if (tinsel_on_tree) {
        new Tinsel(points.flat(), Math.floor(Math.random(15) + 5), Christmas.ctx);
      }
    });
  },

  add_baubles: function () {
    Array(50).fill().forEach(function () {
      var x = 100 + Math.floor(Math.random() * 400);
      var y = 100 + Math.floor(Math.random() * 550);
      if (Utils.inside([x, y], Tree.body_points)) {
        Christmas.add_bauble(x, y, Math.random() * 20);
      }
    });
  },

  add_bauble(x, y, size) {
    this.baubles.concat(
      new Bauble(x, y, size, this.ctx)
    );
  },

};
