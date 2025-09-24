// ------------------------------
// Demonstrating Function Scope
// ------------------------------
function scopeExample() {
  let localVar = "I am inside this function";
  console.log(localVar); // Accessible here
}
scopeExample();
// console.log(localVar); // ❌ Would throw ReferenceError (not in scope)


// ------------------------------
// Demonstrating Parameters & Return Values
// ------------------------------
function addNumbers(a, b) {
  return a + b; // Returning a value
}

// Handle form submission
document.getElementById("demoForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  let result = addNumbers(num1, num2); // Call function with parameters
  document.getElementById("result").textContent = "Result: " + result;
});


// ------------------------------
// Demonstrating Animation Trigger
// ------------------------------
const animateBtn = document.getElementById("animateBtn");
const animatedBox = document.getElementById("animatedBox");

animateBtn.addEventListener("click", () => {
  // Add animation class
  animatedBox.classList.add("animate");

  // Remove class after animation ends so it can replay
  animatedBox.addEventListener("animationend", () => {
    animatedBox.classList.remove("animate");
  }, { once: true });
});
