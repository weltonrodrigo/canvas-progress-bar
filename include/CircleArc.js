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
					0, 0,
					this.attrs.radius,
					this.attrs.startAngle, this.attrs.endAngle % (2*Math.PI),
					this.attrs.counterClockWise
					);
			context.lineTo(0, 0);
			context.closePath();

			this.fill(context);
			this.stroke(context);
    }
};
Kinetic.Global.extend(Kinetic.CircleArc, Kinetic.Shape);

// add getters setters
Kinetic.Node.addGettersSetters(
		Kinetic.CircleArc, ['startAngle', 'endAngle', 'radius']);
