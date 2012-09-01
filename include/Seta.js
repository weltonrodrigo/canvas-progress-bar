Kinetic.Seta = function(config){
	this._initSeta(config);
};

Kinetic.Seta.prototype = { 
	_initSeta: function(config){

		this.setDefaultAttrs({
			points: [0, 0], 
			size: 10, 
			fill: 'orange',
			stroke: 'black',
		});

		this.shapeType = "Seta";
		config.drawFunc = this.drawFunc;

		// Calculate points
	  config.points = this._calcPoints(config);

		// Calculate strokeWidth
		config.strokeWidth = this._calcStroke(config);

		// call super constructor
		Kinetic.Shape.call(this, config);

		var dois = 1 + 1;
	
	}, 
	_calcStroke: function(config){
		// Let user specify a width.
		if (config.strokeWidth) {
			return config.strokeWidth;
		}else{		
			return 0.25 * (config.size || this.attrs.size);
		}
	}, 
	_calcPoints: function(config){

		var size   = config.size || this.attrs.size;
		var quarter = size/4;

		// This is an arrow:
		var seta = [
			//X, Y
			0, 0,
			3*quarter, 0,
			size, size/2,
			3*quarter, size,
			0, size,
			quarter, size/2
		];

		// Upper left point of the arrow.
		// Use defaults if not specified
		var init = (config.points || this.attrs.points);
		offsetX = init[0];
		offsetY = init[1];

		var points = [];

		// Populate config.points with an arrow plus offset.
		for (var p = 0; p <seta.length; p +=2){
			points.push( offsetX + seta[p]  );
			points.push( offsetY + seta[p+1]);
		}
		return points;
	},
	drawFunc: function(context) {
			context.beginPath();
			context.moveTo(this.attrs.points[0].x, this.attrs.points[0].y);
			for(var n = 1; n < this.attrs.points.length; n++) {
					context.lineTo(this.attrs.points[n].x, this.attrs.points[n].y);
			}
			context.closePath();
			this.fill(context);
			this.stroke(context);
	}
};
Kinetic.Global.extend(Kinetic.Seta, Kinetic.Shape);
Kinetic.Node.addGettersSetters(Kinetic.Seta, ['initial', 'points', 'size'])
