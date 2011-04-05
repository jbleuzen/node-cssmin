var puts = require('sys').puts,
	fs = require('fs'),
	cssmin = require('../cssmin').cssmin;

var css = fs.readFileSync("test.css", encoding='utf8');

var min = cssmin(css);

puts(min);