// write a JavaScript function that returns a string that has letters in alphabetical order.
//Example String:'webmaster'
//Expected output: "abeemrstw" 

function sortAlphabetically(string){


    return sortData= string.split("").sort().join();
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


function isPalindrome(value) {
    // Convert value to string
    const strValue = String(value);

    // Reverse the string
    return strValue ===strValue.split('').reverse().join('');

}

// Examples
console.log(isPalindrome('mom'));
console.log(isPalindrome(121));
console.log(isPalindrome(-10));
console.log(isPalindrome(10));
console.log(isPalindrome('test'));


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