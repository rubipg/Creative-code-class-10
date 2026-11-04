let sound;
// addomg a slider
let slider;

async function setup() {
  createCanvas(windowWidth, windowHeight);

  // use the p5 DOM to create another paragraph
  // thsi is added to the webpage, can be higlighted
  // has CSS styling applied
  let p = createP("added this paragraph html with p5");
  p.center();
  p.style("background-color", "red");

  sound = await loadSound("Intense.mp3");
  sound.play();
  sound.loop();

  slider = createSlider(-2, 10, 1, 0.5);
  slider.position(20, 40);
  slider.changed(newSliderValue);
}

function draw() {
  background(220);

  // this is drawn on the canvas, cannot be highlighted
  // it also does not have the CSS styling on the <p>

  text("this is a p5 text", 20, 20);
}

// under the draw }

function newSliderValue() {
  print(slider.value());
  sound.rate(slider.value());
}
