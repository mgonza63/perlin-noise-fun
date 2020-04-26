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

var inc = 0.01

function setup() {
    createCanvas(400, 400);
    
}

function draw() {

    var yoff = 0;
    var xoff = 0;
    loadPixels();
    for (var y = 0; y < width; y++) {
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            var r = noise(xoff) * 255;
            pixels[index + 0] = r;
            pixels[index + 1] = r;
            pixels[index + 2] = r;
            pixels[index + 3] = r;

            xoff += 0.01
        }
    }
    updatePixels();
}

// <-- Moving Graph -->