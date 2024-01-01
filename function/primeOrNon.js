function isPrime(number) {   // 0 and 1 are not prime numbers
       if (number <= 1) {
        return false;
    }
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            // If the number is divisible by any other number, it's not prime
            return false;
        }
    }
    // If no divisors were found, the number is prime
    return true;
}
const exampleNumber = 2232;
const result = isPrime(exampleNumber);
console.log(result); 
