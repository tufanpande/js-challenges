//key value

const person={
    firstName: "Tufan",
    lastName: "Pandey",
    age:21,
    isAdult: true,
    fullname: function(){
        return this.firstName + this.lastName;

    },
    isEligibleToVote: ()=> {
        return person.age >18;
    },

};


console.log (person.fullname());
console.log(person.isEligibleToVote());

console.log(person["firstName"]);