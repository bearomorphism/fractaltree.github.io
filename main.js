var slider_1, slider_2;
var mul;
var maxn;
var angle_1, angle_2;
var cb, cs;
var button;

function setup() {
  createCanvas(800, 600);
  slider_1 = createSlider(-PI, PI, PI / 4, 0.01);
  slider_2 = createSlider(-PI, PI, PI / 4, 0.01);
  slider_3 = createSlider(0, 13, 5, 1);

  button = createButton('GET RANDOM COLOR');
  button.mousePressed(randomColor);
  randomColor();
}

function draw() {
  background(cb);
  stroke(cs);
  translate(width/2, height);
  var len = 200;
  maxn = slider_3.value();
  angle_1 = slider_1.value();
  angle_2 = -slider_2.value();
  mul = 0.67;
  branch(len, 0);
}

function branch(len, n) {
  line(0, 0, 0, -len);
  translate(0, -len);
  var l = len * mul;
  if (n < maxn) {
    push();
    rotate(angle_1);
    branch(l, n + 1);
    pop();
    push();
    rotate(angle_2);
    branch(l, n + 1);
    pop();
  }
}

function randomColor() {
  cb = color(random(100));
  cs = color(random(100, 256), random(100, 256), random(100, 256));
}
