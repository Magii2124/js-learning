//1. Array function with no argument and no returnvalue 
let show = () => {
    console.log(`Inside show...`);

}
show();

//2.Arrow function with argument and no return value
let add = (n1, n2) => console.log(`Addition is : ${n1+n2}`);


add(5, 10)

//2.Arrow function with argument and return value
let square = (num) => {
    let result = num+num
    return result;
}
let squareResult =square(5);
console.log(squareResult
);


