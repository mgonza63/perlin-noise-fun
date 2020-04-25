var columns, rows;
var scale = 20
var width = 1400;
var height = 1000;

var terrain = [];

function setup() {
    createCanvas(600,600, WEBGL);
    columns = width / scale
    rows = height / scale
}