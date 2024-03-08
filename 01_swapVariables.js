console.log("===============swap two variable values===============");
var name1 = "sweety";
var name2 = "cutie";
console.log("======== Before Swap ========");
console.log("sweety:",name1,"cutie:",name2);

console.log("======== After Swap ========");
var temporary = name1;
name1 = name2;
name2 = temporary;
console.log("sweety:",name1,"cutie:",name2);

console.log("=============== swap three values===============");
var n1= 100;
var n2 = 200;
var n3 = 300;
console.log("======== Before Swap ========");
console.log("n1:",n1, "n2:",n2,"n3:",n3);

console.log("======== After Swap ========");
var temp;
temp = n1;
n1 = n2;
var temp = n2;


n2 = n3;
n3 = temp;

console.log("n1:",n1, "n2:",n2,"n3:",n3);