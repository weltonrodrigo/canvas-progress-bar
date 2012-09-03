CanvasGrid = function(config){
  this._initCanvasGrid(config);

};
CanvasGrid.prototype = {
  _initCanvasGrid:
    function(config){
      this.attrs = {
        size: 10, 
      };

      for (var setting in config){
        this.attrs[setting] = config[setting];
      }

    }, 
  grid : function(canvas){
    var ctx = canvas.getContext('2d');
    var w = canvas.width;
    var h = canvas.height;

    var size = this.attrs.size;

    for (var i=0; i < w; i += size) {
        ctx.strokeRect(i, 0, size, h);
    }

    for (var i=0; i < h; i += size) {
        ctx.strokeRect(0, i, w, size);
    }

  },
};
