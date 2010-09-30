/*
 node-cssmin - a css minifier



*/


exports.cssmin = cssmin;

function cssmin(input, linebreak) {

	if(linebreak == null){
		linebreak = 0;
	}

	// normalize whitespace
	output = input.replace(/\s+/g, " ");
	
	// Remove comments
	output = output.replace(/\/\*(.*?)\*\//g, "");

	// Remove extra whitespace
	output = output.replace(/([!{}:;>+\(\[,])\s+/g, "$1");

	if(linebreak == 1){
		// Option for debug, that adds a linebreak after each rule
		output = output.replace(/(})/g, "$1\n");
	}
	
	// Remove unnecessary 0px, 0em,... Turning them into 0;
	output = output.replace(/([\s:])(0)(px|em|%|in|cm|mm|pc|pt|ex)/g, "$1$2");

	return output;
}