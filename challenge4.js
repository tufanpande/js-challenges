/*Write a JavaScript program to calculate multiplication and division of 
two numbers.(use same function to achieve this)*/



const num1 = Number(prompt("Enter first number: "));
const num2 = Number(prompt("Enter second number: "));

if (!num1 == 0 && !num2 == 0) {
  const multi = num1 * num2;
  const div = num1 / num2;
  alert("YOUR MULTIPLICATION IS: " + multi + " AND YOUR DIVISION IS: " + div);
} else {
  alert("Please enter non-zero numbers for both inputs.");
}
// l