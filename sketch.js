// var xoff1 = 0;
// var xoff2 = 1000;

// function setup() {
//     createCanvas(400, 400);
// }

// function draw() {
//     background(51);


//     // var x = random(width);
//     var x = map(noise(xoff1), 0, 1, 0, width); // change noise to 1 for single frames
//     var y = map(noise(xoff2), 0, 1, 0, height);

//     xoff1 += 0.01
//     xoff2 += 0.01
//     ellipse(x, y, 24, 24)
// }

// // <-- Moving Circle -->

// var inc = 0.01

// var start = 0;

// function setup() {
//     createCanvas(400, 400);
// }

// function draw() {
//     background(51);
//     stroke(255);
//     noFill()
//     beginShape()
//     var xoff = start;
//     for (var x = 0; x < width; x++) {
//         stroke(255);
//         var y = noise(xoff) * height;
//         vertex(x, y);

//         xoff += inc
//     }
//     endShape();

//     start += inc

// }

// // <-- Moving Graph -->

// var inc = 0.01

// function setup() {
//     createCanvas(400, 400);
    
// }

// function draw() {

//     var yoff = 0;
    
//     loadPixels();
//     for (var y = 0; y < width; y++) {
//         var xoff = 0;
//         for (var x = 0; x < width; x++) {
//             var index = (x + y * width) * 4;
//             var r = noise(xoff, yoff) * 255;
//             pixels[index + 0] = r;
//             pixels[index + 1] = r;
//             pixels[index + 2] = r;
//             pixels[index + 3] = 255;

//             xoff += inc
            
//         }
//         yoff += inc
//     }
//     updatePixels();
// }

// // <-- Moving Graph -->

var cols, rows;
var scl = 20;
var w = 1400;
var h = 1000;

var flying = 0;

var terrain = [];

function setup() {
    createCanvas(600,600, WEBGL);
    cols = w / scl;
    rows = h / scl;

    for (var x = 0; x < cols; x++) {
        terrain[x] = [];
        for (var y = 0; y < rows; y++) {
            terrain[x][y] = 0;
        }
    }
}

function draw() {
    background(0);
    translate(0, 50)
    rotateX(PI / 3);
    fill(200, 200, 200, 50);
    translate(-w / 2, -h / 2);

    for (var y = 0; y < rows - 1; y++) {
        beginShape(TRIANGLE_STRIP)
        for (var x = 0; x < cols; x++) {
            vertex(x * scl, y * scl,  terrain[x][y])
            vertex(x * scl, (y + 1) * scl, terrain[x][y + 1])

        }
        endShape();
    }
}
