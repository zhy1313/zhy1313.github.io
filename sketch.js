function setup() {
  
  leinwand = createCanvas(windowWidth, windowHeight);
  leinwand.position(0,0);
  leinwand.style("z-index","-1")
  fill(20,0,10,80);
  noStroke()
  //background(220,160,221,10,20);
}

function draw() {
  
  circle(mouseX,mouseY,50);
}