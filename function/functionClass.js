
// writ e a function to add two numbers

function sum(a,b){
    return a+b;
}

//types of function
//===========================================================================
//Nameless function/ Anonymous function
// function keeywoed must be used to make it global
const a= function(){
    console.log("hello i am nameless");
};


a();
//==============================================================================
//Default function
//write a multiplidation table of 2
const mul =(a =3, b)=> {
    return a*b;
};
const res = mul(undefined,3);
console.log(res);
// eg. pagination
//===========================================================================
//parameterized function
//write a multiplidation table of 3
const multiplier =(a , b,c)=> {
    return a*b;
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//pagination

function pagination(page=1, size=5){

for(let i=page;i<= size;i++){
    console.log(i);    
}
}

pagination();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Inline function(Interview ques)
// if we assign variable to nameless function/ anonymous function, it is called inline function
 const footer = function (){
console.log("anonymous");
 };
 footer();// page 1
 footer();//page 2
 //concept : reusability



//==============================================
// closure(Interview ques)


//A funcition that returns the hardcoded variable sored inside the function

//use case: used to get the secret environment variables used in the application;

//write a function that returns a secret 
const secret =()=>{
    const password =" password";
    return password;
};
console.log(secret());
//=====================================================================

// Implicit function
// if we remove the return keyword to return the result 

const addit= (a,b)=> a+b;

const result= addit(2,3);
const result1= addit(2,3);

console.log({result,result1});

//===================================================================
//Explicit Function
const additi=(a,b)=>{
    return a+b;
};
//===================================================

//IIFE
//Immediately Invoked Functional Expression
// Use case: Scripts to add the dummy data inside the application during first run
(function(){
    console.log("I am IIFE");
})();
//==================================================================================================
// pagination();
// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// //Inline function(Interview ques)
// // if we assign variable to nameless function/ anonymous function, it is called inline function
//  const footer = function (){
// console.log("anonymous");
//  };
//  footer();// page 1
//  footer();//page 2