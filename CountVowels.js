//Write a JavaScript program to count the number of vowels in a given string.
// Get user input
const inputString = prompt("Enter a string:");

// Count the number of vowels
const numOfVowels = (inputString.match(/[aeiouAEIOU]/g) || []).length;

// Display the result
alert(`The number of vowels in "${inputString}" is: ${numOfVowels}`);