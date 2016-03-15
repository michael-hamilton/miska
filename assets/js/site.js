var Ribbon = function(height, width, selector) {
	this.height = height;
	this.width = width;
	this.count = 0;
	this.selector = selector;
}

Ribbon.prototype.init = function() {
	this.resize();
	this.update();
}

Ribbon.prototype.randColor = function() {
	var values = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'],
		color = "#";

	for(var i = 0; i<6; i++) {
		color += values[Math.floor(Math.random() * (15))];
	}

	return color;
}

Ribbon.prototype.render = function() {
	$(this.selector).css({"width": "100%", "height": this.height, "overflow": "hidden"});
	$(this.selector).empty();
	for(var i = 0; i < this.count; i++){
		$(this.selector).append('<div class="square" style="float:left; height:'+this.height+'; width:'+Math.floor(Math.random() * (15))+'px; background-color:'+this.randColor()+'"></div>');
	}
}

Ribbon.prototype.resize = function() {
	window.onresize = (function() {
		this.update();
	}).bind(this);
}

Ribbon.prototype.update = function() {
	this.count = window.innerWidth*.30;
	this.render();
}

function init() {
	var r = new Ribbon('5px', '10px', '.ribbon');
	r.init();
}

$(document).ready(init());