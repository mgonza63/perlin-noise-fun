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

// // circle

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(51);
    stroke(255);
    noFill()
    beginShape()
    var xoff = 0;
    for (var x = 0; x < width; x++) {
        stroke(255);
        var y = noise(xoff) * height;
        vertex(x, y);

        xoff += 0.02
    }
    endShape();
    noLoop();
}