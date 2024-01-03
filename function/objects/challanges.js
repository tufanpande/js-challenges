//Print (console.log()) value of the property "name" in the given object
let student = {
    name:"Max",
    age: 27
    };
    
    console.log(student.name);

/*Find the value of the price property and if it is greater than 100, 
discount it by 10%. If that’s not the case, discount it by 7%. b. 
Update the object with the new property - discount and the corresponding value (7% or 10%) and 
the new price.*/

let car = {
    name: "Volvo",
    manufacture: 2017,
    price: 1200  // Assume the price is 1200
  };
  
  // Check  price is greater than 100
  if (car.price > 100) {
    car.discount = 10;  // discount 10%
    car.price *= 0.9;   // Apply10% discount
  } else {
    car.discount = 7;   // discount 7%
    car.price *= 0.93;  // Apply a 7% discount
  }
  
  console.log(car);
  

