/* Write a JavaScript program to compute the sum of the two given integers.
 If the two values are the same, then return triple their sum.*/

 const a= Number(prompt("First number:"));
 const b= Number(prompt("second number:"));

 if(a ===b){
    const sum= 3*(a+b);
    alert("the triple sum is:"+ sum );

 }else{
    const add=a+b;
    alert ("The sum is "+ add);
 }