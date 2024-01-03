// write a JavaScript function that returns a string that has letters in alphabetical order.
//Example String:'webmaster'
//Expected output: "abeemrstw" 

function sortAlphabetically(string){


    let charArray= string.split("");

    charArray.sort();

    let sortData=charArray.join('');

    return sortData;
};


let input= "webmaster";

let result= sortAlphabetically(input);
console.log(result);


//hw=>
//Write a js Function that returns true if the value is palindrome else false?
//for eg: mom(true)
//eg: test
//palindrome(121) true
//palindrome(-10) false
//palindrome(10) false 

//spread operator

const arr=[
    {name:"hari",age:10},
    {name:"shyam",age:15},
    {name:"ram",age:20},
];

const obj ={
    name:"a",
    address:"b",
    password:"c",
    roles:[],
    isActive: false,
};

const{password, roles, ...data}= obj;
console.log({data});

const [a,...rest] = arr;
console.log(result);