// Function to count prime numbers in an array
function countPrimes(arr) {
    let count = 0;
    for (let num of arr) {
        if (isPrime(num)) {
            count++;
        }
    }
    return count;
}


console.log("=============== count prime numbers from given array ===============");
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
    
}
const array = [3, 9, 7, 6, 19, 29, 53];
console.log("Number of prime numbers:", countPrimes(array));



console.log("=============== count space ===============");
function spaceCount(str) {
    let count = 0;
    for (let char of str) {
        if (char === ' ') {
            count++;
        }
    }
    return count;
}

const str1 = "Revision is the mother of success";
const str2 = "Java Script is the language of internate world";
console.log("Number of spaces in string 1:", spaceCount(str1));
console.log("Number of spaces in string 2:", spaceCount(str2));