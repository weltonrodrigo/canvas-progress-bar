Kinetic.Seta = function(config){
	this._initSeta(config);
};

Kinetic.Seta.prototype = { 
	_initSeta: function(config){

		this.setDefaultAttrs({
			x: 0, 
			y: 0, 
			size: 10, 
			fill: 'orange',
			stroke: 'black',
			fixStrokeWidth: false, 
			strokeWidthProportion: 0.25, 
		});

		// Init strokeWidth
		this._initStroke(config);

		// call super constructor
		Kinetic.Polygon.call(this, config);

		this.shapeType = "Seta";
	
	}, 
	_initStroke:
		function(config){
			if (config.strokeWidth !== undefined) {
				this.attrs.fixStrokeWidth = true;
			}
		}, 
	_calcStroke:
		function(){
			if(!this.attrs.fixStrokeWidth){
				return this.attrs.strokeWidthProportion * this.attrs.size;
			}
	}, 
	_calcPoints: function(){

		var size   = this.attrs.size;
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

		var points = [];

		// Populate config.points with an arrow plus offset.
		for (var p = 0; p <seta.length; p +=2){
			points.push( { x: seta[p],  y: seta[p+1] } );
		}
		return points;
	}, 
	drawFunc: function(context){
			this.attrs.points = this._calcPoints();
			this.attrs.strokeWidth = this._calcStroke();
			Kinetic.Polygon.prototype.drawFunc.call(this, context);
		}, 
};
Kinetic.Global.extend(Kinetic.Seta, Kinetic.Polygon);
Kinetic.Node.addGettersSetters(Kinetic.Seta, ['initial', 'size'])
