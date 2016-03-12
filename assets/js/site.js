//generates a ribbon with random colors.  height and width must be a CSS appropriate value
//height: String, width: String, amount: Integer
function ribbon(height, width, amount){
	
	//default parameters
	height = height || "100%";
	width = width || "5px";
	amount = amount || 500;

	//returns a randomly generated hex color code.  prefix is prepended to the returned string
	//prefix: String
	function randColor(prefix){
		//if no prefix is provided, set it to be '#'
		prefix = prefix || "#";

		//array of hex values, declare color variable with initial value of prefix
		var values = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'],
			color = prefix;

		//generates the hex string and appends each hex value to color
		for(var i = 0; i<6; i++){
			color += values[Math.floor(Math.random() * (15))];
		}

		return color;
	}

	//applies default styles to .ribbon container
	$('.ribbon').css({"width": "100%", "height": height, "overflow": "hidden"});

	//fills .ribbon container with .square divs that are styled and randomly colored
	for(var i = 0; i < amount; i++){
		$('.ribbon').append('<div class="square" style="float:left; height:'+height+'; width:'+Math.floor(Math.random() * (15))+'px; background-color:'+randColor()+'"></div>');
	}
}

$(document).ready(ribbon("5px", "10px", 300));