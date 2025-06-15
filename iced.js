const steps = [
  "Mix coffee, sugar, and hot water in a bowl.",
  "Whisk until it becomes frothy and creamy.",
  "Pour milk into a glass (hot or iced).",
  "Scoop whipped coffee on top. Serve & enjoy!"
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
