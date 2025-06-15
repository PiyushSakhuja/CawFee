const steps = [
  "Brew your coffee (use instant or drip-brewed).",
  "Add sugar while the coffee is hot so it dissolves easily. Stir well.",
  "Let the coffee cool slightly (or chill it in the fridge/freezer for 10 minutes).",
  "Fill a glass with ice cubes.",
  "Pour the cooled coffee over the ice.",
  "Add cold milk and stir.",
  "Optional: Top with whipped cream, a dash of vanilla, or a swirl of chocolate syrup.",
  "Sip and enjoy your chilled, refreshing iced coffee! 🧋"
  
];

let currentStep = 0;
const stepText = document.getElementById("step-text");

function showStep(index) {
  stepText.classList.remove("fade-in"); 
  void stepText.offsetWidth; 
  stepText.innerText = steps[index];
  stepText.classList.add("fade-in");
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}


window.onload = () => {
  showStep(currentStep);
};
