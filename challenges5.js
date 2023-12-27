/*Write a JavaScript program to calculate multiplication and division of 
two numbers.(use same function to achieve this)*/

const num1= Number(prompt("Enter the first number"));
const num2= Number(prompt("Enter the second number"));

if(!num1==0 && !num2==0){
    const mul= num1*num2;
    const div= num1/num2;
    alert("YOUR MULTIPLICATION IS :" + mul +  " AND YOUR DIVISION IS " + div);

}
else{
    alert("Please enter non zero number or enter both inputs..!!!")
}