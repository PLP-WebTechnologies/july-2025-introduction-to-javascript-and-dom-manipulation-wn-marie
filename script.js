// 🎯 PART 1: Mastering JavaScript Basics
// Variables, Data Types, Operators, and Conditionals


/*
Function: checkEligibility
Purpose: Gets user input (name and age), uses conditionals to determine eligibility, and displays a result on the page.
*/

function checkEligibility() {
  // Step 1: Get input values from the DOM
  const name = document.getElementById("nameInput").value.trim();
  /* 
    📥 document.getElementById: Finds the HTML element with id="nameInput"
    .value: Gets what the user typed
    .trim(): Removes extra spaces at start/end
    'const' means this value won't be reassigned
  */

  const ageInput = document.getElementById("ageInput").value;
  const age = Number(ageInput);
  /* 
    Number(): Converts string (like "25") into a number
    Needed so we can compare it mathematically
  */

  const resultElement = document.getElementById("result");
  /* 
    🎯 We'll use this to update the result paragraph
  */

  // Step 2: Validate input
  if (!name) {
    /* 
      ❌ !name means "if name is empty or falsy"
      Prevents blank submissions
    */
    resultElement.textContent = "⚠️ Please enter your name.";
    resultElement.style.color = "red";
    return; // Stop the function here
  }

  if (isNaN(age) || age < 0) {
    /* 
      🚫 isNaN = "is Not a Number"
      If age isn't a number OR is negative → invalid
    */
    resultElement.textContent = "⚠️ Please enter a valid age.";
    resultElement.style.color = "red";
    return;
  }

  // Step 3: Use conditionals to make decisions
  let message;
  /* 
    🔁 'let' because we will change this value below
  */

  if (age < 13) {
    message = `Hello ${name}! You're a child. 🧒`;
  } else if (age >= 13 && age < 18) {
    /* 
      && = logical AND: both conditions must be true
    */
    message = `Hello ${name}! You're a teenager. 🧑`;
  } else if (age >= 18 && age < 60) {
    message = `Hello ${name}! You're an adult. 👨‍💼`;
  } else {
    message = `Hello ${name}! You're a senior. 👴`;
  }

  // Step 4: Display result
  resultElement.textContent = message;
  /* ✍️ Updates the text inside the <p id="result"> */
  resultElement.style.color = "#2c3e50";
  resultElement.style.fontWeight = "bold";
  /* 🖌️ Makes the result look important */
}


// ❤️ PART 2: JavaScript Functions — Reusability
// Create reusable logic blocks

/*
Function: greetUser
Purpose: Displays a friendly greeting using a default name.
 */
function greetUser() {
  const userName = "Guest"; // Could be dynamic later
  const greeting = `👋 Hello, ${userName}! Welcome back.`; 
  /* 
    `` = template literal (allows ${} variables)
  */
  displayFunctionResult(greeting);
  /* 
    🔄 Reuse the helper function to show output
  */
}

/*
Function: calculateArea
Purpose: Calculates area of a circle with radius = 5 using Math.PI
 */
function calculateArea() {
  const radius = 5;
  const area = Math.PI * radius ** 2;
  /* 
    📐 Formula: πr²
    Math.PI = 3.14159...
    ** = exponent (same as radius * radius)
  */
  const message = `📏 Circle with radius ${radius} has area ≈ ${area.toFixed(2)}`;
  /* 
    .toFixed(2): Rounds to 2 decimal places
  */
  displayFunctionResult(message);
}

/*
 Helper Function: displayFunctionResult
 Purpose: Reusable way to show output in the function section
 Why? Avoids repeating code — DRY principle!
 */
function displayFunctionResult(text) {
  const output = document.getElementById("functionResult");
  const p = document.createElement("p");
  /* 
    🛠️ Creates a new <p> element in memory
  */
  p.textContent = text;
  p.style.margin = "5px 0";
  p.style.color = "#27ae60";
  output.appendChild(p);
  /* 
    ➕ Adds the new <p> to the DOM inside #functionResult
  */
}


// 🔁 PART 3: JavaScript Loops — Repetition Power!
// Use loops to automate tasks

/*
 Function: printNumbers
 Purpose: Uses a for loop to print numbers 1 to 5
 */
function printNumbers() {
  const output = document.getElementById("loopOutput");
  output.innerHTML = ""; // Clear previous results

  for (let i = 1; i <= 5; i++) {
    /* 
      🔁 for loop structure:
      - let i = 1 → start at 1
      - i <= 5 → keep going while i is ≤ 5
      - i++ → add 1 each time
    */
    const li = document.createElement("li");
    li.textContent = `✅ Number ${i}`;
    li.style.color = "#3498db";
    output.appendChild(li);
  }
}

/*
  Function: printEvenNumbers
  Purpose: Uses a while loop to print even numbers from 2 to 10
 */
function printEvenNumbers() {
  const output = document.getElementById("loopOutput");
  output.innerHTML = ""; // Clear previous results

  let num = 2;
  /* 
    🔄 while loop: runs as long as condition is true
  */
  while (num <= 10) {
    const li = document.createElement("li");
    li.textContent = `🟢 Even number: ${num}`;
    li.style.color = "#2ecc71";
    output.appendChild(li);
    num += 2; // Add 2 → stays even (2, 4, 6, 8, 10)
  }
}


// 🌐 PART 4: Mastering the DOM
// Interact with and modify the webpage

/*
 DOM Interaction 1: Update text content
 */

function updateText() {
  console.log("✍️ [DOM] updateText() called - Updating #dynamicText");

  const textElement = document.getElementById("dynamicText");
  const newText = "✨ Text updated dynamically with JavaScript!";

  textElement.textContent = newText;
  textElement.style.color = "#e74c3c";
  textElement.style.fontSize = "1.2em";

  console.log("✅ [DOM] Text updated to:", newText);
  console.log("🎨 [DOM] Style applied: color and font size");
}


/*
 DOM Interaction 2: Toggle background color using class
 */
function toggleBackgroundColor() {
  const box = document.getElementById("colorBox");
  box.classList.toggle("purple");
  /* 
    🔄 classList.toggle: adds class if missing, removes if present
    This switches between green and purple
  */
}

/*
 DOM Interaction 3: Create and append a new element
 */
function createNewElement() {
  const container = document.getElementById("container");
  const newParagraph = document.createElement("p");
  /* 
    🆕 document.createElement: creates a new HTML element in memory
  */

  const time = new Date().toLocaleTimeString();
  /* 
    🕰️ Gets current time as a readable string
  */
  newParagraph.textContent = `New paragraph added at ${time}`;
  newParagraph.style.padding = "10px";
  container.appendChild(newParagraph);
  /* 
    ➕ Adds the new paragraph to the page
  */
}