
console.log("========= STEP ONE =========");

const greet = () => {
  console.log("Good Evening, Today is Monday");
};

greet();
console.log("========= STEP TWO =========");

const multiply = (a, b, c = 1) => {
  console.log(`Multiplication of ${a}, ${b}, and ${c}:`, a * b * c);
};

multiply(5, 5, 2);

multiply(10, 4);
console.log("========= STEP THREE =========");
const add = (a, b, c, d, e) => {
  const sum = a + b + c + d + e;
  console.log(`The sum of the given numbers is: ${sum}`);
  return sum;
};

add(100, 100, 200, 349, 756);
const result = add("I am", " learning", "ES6", 'features', " in depth");
console.log(`The concatenated string is: ${result}`);