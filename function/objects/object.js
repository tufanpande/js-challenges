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
    facialFeatures:{
        face: "black",
        eyepoint:"brown",
    }

};

console.log(person.facialFeatures);
console.log (person.fullname());
console.log(person.isEligibleToVote());

console.log(person["firstName"]);

//CRUD 
// update the Object
person.firstName='shyam';

console.log(person);
//Delete the property
delete person.facialFeatures;