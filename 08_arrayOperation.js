

var arrayNumbers = [2,4,1,7,9,8];
console.log('***** Original Array *****');
console.log(arrayNumbers);

console.log('***** Removing last element *****');
arrayNumbers.pop();
console.log(arrayNumbers);

var arrayNumbers =  [2,4,1,7,9,8];
console.log('***** Add an element in the last *****'); 
arrayNumbers.push(100);
console.log(arrayNumbers);

var arrayNumbers = [2,4,1,7,9,8];
console.log('***** Add an element in the 0th index *****'); 
arrayNumbers.push(44);
console.log(arrayNumbers);


var arrayNumbers = [2,4,1,7,9,8];
console.log('***** Removing or Delete an element in the 0th index *****'); 
arrayNumbers.shift();
console.log(arrayNumbers);

console.log('***** slice() *****');
var arrayNumbers = [2,4,1,7,9,8,11,22];
const subArrray = arrayNumbers.slice(3, 5);
console.log(subArrray);
console.log(arrayNumbers);

console.log('***** Remove or Delete,middle elements *****');
var arrayNumbers = [2,4,1,7,9,8,11,22];
console.log(arrayNumbers);
const deleteElements = arrayNumbers.splice(2, 3);
console.log(deleteElements);
console.log(arrayNumbers);

console.log('***** Insert or Add an elements in the middle of the array *****');
var arrayNumbers = [2,4,1,7,9,8,11,22];
console.log(arrayNumbers);
const deleteElement = arrayNumbers.splice(3, 1, 100);
console.log(arrayNumbers);
console.log(arrayNumbers);

console.log('***********************');
var arrayNumbers = [2,4,1,7,9,8,11,22];
console.log(arrayNumbers);
arrayNumbers.splice(5, 0, 500, 400);
console.log(arrayNumbers);
