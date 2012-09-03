Kinetic.CircleArc = function(config) {
	this._initCircleArc(config);	
};

Kinetic.CircleArc.prototype = {
    _initCircleArc: function(config) {
        this.setDefaultAttrs({
            radius: 0, 
						startAngle: Math.PI, 
						endAngle: 0, 
						counterClockWise: false,  
        });

        this.shapeType = "CircleArc";
        config.drawFunc = this.drawFunc;

        // call super constructor
        Kinetic.Shape.call(this, config);
    },
    drawFunc: function(context) {

			context.beginPath();
			context.arc(
					this.attrs.x, this.attrs.y,
					this.attrs.radius,
					this.attrs.startAngle, this.attrs.endAngle,
					this.attrs.counterClockWise
					);
			context.lineTo(this.attrs.x, this.attrs.y);
			context.closePath();

			this.fill(context);
			this.stroke(context);
    }
};
Kinetic.Global.extend(Kinetic.CircleArc, Kinetic.Shape);

// add getters setters
Kinetic.Node.addGettersSetters(Kinetic.CircleArc, ['startAngle', 'endAngle', 'radius']);
