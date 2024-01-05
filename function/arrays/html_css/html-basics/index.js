

function today(){
    return new Date();
}
 
function getFormData(){
    const fName = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    console.log({fName, lName});
}

document.getElementById("dateId").innerHTML=today();