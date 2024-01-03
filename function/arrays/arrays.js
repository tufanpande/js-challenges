//======================================================================


//ARRAY


const persons= [
    {name:"ram", age:"20"}, {name:"tufan",age:"22"},{},{}, {a:""},
];


console.log(persons);

//Access
//provides index values in the array
//index always starts from 0
console.log(persons[persons.length-1]);


//Update 

persons[0]= {name:"Pandey"};
persons[3]= {name: "shyam"};


//Delete
// delete persons[0];


// loop inside array

const peoples =[
    {name: "ram", age:20},
    {name: "Hari", age:23},
    {name: "shyam",age:15},
];

//Functiom to console the name
const showName =(people)=>{
    console.log(people.name);
};
//loop usinf for loop

for(let i= 0; i<=peoples.length-1; i++){
    showName(peoples[i]);
}

//loop using arrays inbult features
//direct source data manipulation
peoples.forEach(showName);//ES5


//Advanced technique
//immutable JS
//create a shallow copy and operate on it
//ES6
//map, filter, reduce, every, some
console.log("............");
peoples.map((people)=>showName(people));


// write  a function to sort the array by  age in ascending order
const ex=[
    {name:"ram",age:20},
    {name:"hari",age:10},
    {name:"shyam", age:22},
];
const newAr= ex.sort((a,b)=> a.age-b.age);
console.log(newAr);

//HW 
//by mapping

const exx = [
    { name: "ram", age: 20 },
    { name: "hari", age: 10 },
    { name: "shyam", age: 22 },
];


const newArr = exx.map(obj => obj).sort((a, b) => a.age - b.age);

console.log(newArr);
