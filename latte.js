const steps = [
  "Brew your coffee",
  "If using espresso, make 1 shot. For instant coffee, dissolve 2 tbsp in ¼ cup hot water.",
  "Heat the milk:",
  "Pour the brewed coffee into a mug.",
  "Pour the cooled coffee over the ice.",
  "Add cold milk and stir.",
  "Optional: Top with whipped cream, a dash of vanilla, or a swirl of chocolate syrup.",
  "Sip and enjoy your chilled, refreshing latte coffee! 🧋"
  
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
