// // write a JS functiion that reverrse a number.

// /* 
// 1.write a function called reserve
// 2.call the reserve function with parameter
// 3.invoke that function with data 
// 4.typecast that num into string
// 5.get the length of the string
// 6.loop in opposite way
// 7.return the value

// */
// //Example : x= 32243; Expected output : 34223;

// const reverser= (num)=>{
// //logic
// const data = String(num);
// const lengthOfData = data.length;//new
// let temp = "";
// for(let i = lengthOfData-1; i>=0; i--){
//     temp+= data[i];//new
// }
// return temp;
// };

// console.log(reverser(32243));



//celcius to fahrenheit


// const tempConverter =(temp,measurement="c")=>{
//     if (measurement==="c"){
//         return(9*temp)/5+32+"fahrenheit";

//     }
//     return ((temp-32)/9)*5 +"celcius";

// };
// console.log(tempConverter(45,"f"));

//==========================================
// write a js program to calculate multiplication and division of two number (use dame function to achieve this

const num1= Number(prompt("Enter the first number"));
const num2= Number(prompt("Enter the second number"));

const multDiv= (numb1,numb2)=>{
    const mult =num1*num2;
    console.log(mult);
    const div = num1/num2;
    console.log(div);
        
    

};
multDiv(num1,num2);

console.log("multDiiv");