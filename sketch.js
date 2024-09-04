let showerSlider, dishesSlider, laundrySlider;
let resultText, showerValueText, dishesValueText, laundryValueText;
let bgColor, sliderColor, buttonColor, resultColor;

function setup() {
  createCanvas(600, 500);
  

  bgColor = color(50, 200, 255);  
  buttonColor = color(0,0,50); 
  resultColor = color(0,0, 0); 
  
  background(bgColor);
  textFont('Bebas Neue');
  textAlign(CENTER);
  textSize(16);

  //shower water usage
  fill(0);
  text('Shower (liters/day):', width / 6, 105);
  showerSlider = createSlider(0, 200, 50);
  showerSlider.position(width / 6-80, 120);
  showerSlider.style('-webkit-appearance', 'none');
  showerSlider.style('background-color', 'black');
  showerSlider.style('thumb-style', 'black');
  showerSlider.style('height', '3px');
  showerSlider.style('width', '150px');
  showerSlider.style('cursor', 'pointer');
  
  showerValueText = createP(`${showerSlider.value()}L`);
  showerValueText.position(showerSlider.x + showerSlider.width / 2 - 10, 120); 
  showerValueText.style('font-family','Bebas Neue');

  fill(0);
  text('Washing Dishes (liters/day):', width / 2, 105);
  dishesSlider = createSlider(0, 200, 30);
  dishesSlider.position(width / 2 - 80, 120);
  dishesSlider.style('-webkit-appearance', 'none');
  dishesSlider.style('background-color', 'black');
  dishesSlider.style('thumb-style', 'black');
  dishesSlider.style('height', '3px');
  dishesSlider.style('width', '150px');
  dishesSlider.style('cursor', 'pointer');

  // Display value for dishes slider
  dishesValueText = createP(`${dishesSlider.value()} L`);
  dishesValueText.position(dishesSlider.x + dishesSlider.width / 2 - 10, 120); // Centered beneath slider
  dishesValueText.style('font-family','Bebas Neue');
  
  // Input for laundry water usage
  fill(0);
  text('Laundry (liters/day):', 5 * width / 6, 105);
  laundrySlider = createSlider(0, 200, 100);
  laundrySlider.position(5 * width / 6 - 80, 120);
   laundrySlider.style('-webkit-appearance', 'none');
  laundrySlider.style('background-color', 'black');
 laundrySlider.style('thumb-style', 'black');
  laundrySlider.style('height', '3px');
  laundrySlider.style('width', '150px');
  laundrySlider.style('cursor', 'pointer');

  // Display value for laundry slider
  laundryValueText = createP(`${laundrySlider.value()} L`);
  laundryValueText.position(laundrySlider.x + laundrySlider.width / 2 - 10, 120); // Centered beneath slider
  laundryValueText.style('font-family', 'Bebas Neue');
  
  // Button to calculate water impact
  let calculateButton = createButton('Calculate Environmental Impact');
  calculateButton.position(width / 2-110 , 200);
  calculateButton.style('background-color', buttonColor);
  calculateButton.style('color', 'white');
  calculateButton.style('border', 'none');
  calculateButton.style('padding', '10px 20px');
  calculateButton.style('border-radius', '5px');
  calculateButton.style('font-size', '20px');
  calculateButton.style('font-family', 'Bebas Neue');
  calculateButton.mousePressed(calculateImpact);
  
  // Text to display the result
  resultText = createP('');
  resultText.position(30, 250);
  resultText.style('font-size', '18px');
  resultText.style('color', resultColor);
}

function draw() {
  showerValueText.html(`${showerSlider.value()} L`);
  dishesValueText.html(`${dishesSlider.value()} L`);
  laundryValueText.html(`${laundrySlider.value()} L`);
}

function calculateImpact() {
  let showerUsage = showerSlider.value();
  let dishesUsage = dishesSlider.value();
  let laundryUsage = laundrySlider.value();
  
  // Calculate total water usage
  let totalUsage = showerUsage + dishesUsage + laundryUsage;
  
  // Calculate environmental impact (example values)
  let waterPerAnimal = 500; // liters needed per animal per day
  let waterPerPlant = 20; // liters needed per plant per day
  
  let animalsSaved = totalUsage / waterPerAnimal;
  let plantsSaved = totalUsage / waterPerPlant;
  

  let impactMessage = `Your total daily water usage is ${totalUsage} liters.<br>` +
                      `By reducing your water usage, you could save approximately:<br>` +
                      `${animalsSaved.toFixed(2)} animals<br>` +
                      `${plantsSaved.toFixed(2)} plants<br>` +
                      `<br>Tips: Consider using water-saving devices and reducing your shower time.`;
  
  resultText.html(impactMessage);
}
