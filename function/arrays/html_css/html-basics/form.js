

function today(){
    return new Date();
}
 
function getFormData(){
    const fName = document.getElementById("fName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const male = document.getElementById("male").value;
    const female = document.getElementById("female").value;
    const message = document.getElementById("message").value;

    console.log({fName, email, password,male,female, message, subscribe});
}

document.getElementById("datId").innerHTML=today();