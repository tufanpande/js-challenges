function getFormData(){
    const Name = document.getElementById("name").value;
    const Email = document.getElementById("email").value;
    const Password = document.getElementById("password").value;
    const GenderMale = document.getElementById("male").checked;
    const GenderFemale = document.getElementById("female").checked;
    const Contact = document.getElementById("contact").value;
    const College = document.getElementById("college").value;
    console.log({Name, Email, Password,GenderMale, GenderFemale, Contact, College});
}

/*

MERN Stack
1. Just the right amount of HTML, CSS,JS
->html run
-> jS link
->form
->
 */