function stringHandsOn(){
  var sentence = "   Hey you are doing good, keep it up   ";
  console.log("========== STEP 1 ==========");
  console.log("Given string is:" ,sentence);
}
stringHandsOn();

console.log("========== STEP 2 ==========");

var sentence = "   Hey you are doing good, keep it up   ";
var totalChars = sentence.length;
console.log("Length of Given String is: ${totalChars}");

console.log("========== STEP 3 ==========");
var sentenceTrim = sentence.trim();
var sentenceTrimLength= sentenceTrim.length;
console.log("String after trim is:${sentenceTrim } and its length is: ${sentenceTrimLength}");

console.log("========== STEP 4 ==========");
console.log ("Total number of extra Spaces removed in third step is: ${totalChars- sentenceTrimLength}");


console.log("========== STEP 5 ==========");
var firstChar= sentenceTrim.charAt(0)
var lastChar = sentenceTrim.charAt(sentenceTrimLength -1);
console.log("First Character After trim  is:${ firstChar}" );
console.log("Last Character After Trim is:${lastChar}");

console.log("========== STEP 6 ==========");

var resultValue = sentenceTrim.split(" ")
console.log(resultValue);
console.log("Total count of  words after strim are:${resultValue.length}");

console.log("========== STEP 7 ==========");
var sentenceIndex = sentenceTrim.indexOf("good");
console.log(`Index of the word "good" is:${sentenceIndex} `);

console.log("========== STEP 8 ==========");
var substring  = sentenceTrim.substr(22);
console.log("substring starting from index 22 is:${substring}");

console.log("========== STEP 9 ==========");
var stringEnd = sentenceTrim.endsWith('up');
console.log('String ends with word "up" after step 3 is:${stringEnd}');

console.log("========== STEP 10 ==========");
var stringStart = sentenceTrim.startsWith('Hey');
console.log (` String start with word "Hey" after trimming is:${stringStart}`);