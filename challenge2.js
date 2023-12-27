//Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

const value = Number(prompt("Enter a positive number?"));

if (value>0){
    if(value %3===0 &&value %7 ===0){
        alert("number is multiple of 3 and 7");

    }else{
        if (value %3===0){
            alert("number is multiple of 3");

        }else if( value % 7 ===0){
            alert("nnumber os muliple of 7");
        }else{
            alert("the number is neither multiple of 3 Nor 7");
        }
    }
    

}
else{
    alert("Please enter a positive Number!!!");
}