console.log("***************** Step 1 *****************");
function greaterNumber(num1, num2) {
   var result = num1 > num2 ? num1 : num2;
   console.log(`Given numbers are ${num1} and ${num2}. Greater number is ${result}`);
}   
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("********************* Step 2 *******************");
function isEvenOrOddNum(n1) {
    var result = n1 % 2 == 0 ? "is even number" :"is odd number";
    console.log(`The given number ${n1} is ${result}`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log("************************ Step 3 ***********************");
function wordLength(word) {
    var result = word.length%2==0 ? "even" :"odd";
    console.log(`Length of word ${word} Is Even or ODD: ${result} length.`);
}
wordLength("JavaScript");
wordLength("develpoer");
wordLength("Google");