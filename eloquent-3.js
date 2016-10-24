//Exercise #1. Minimum
function min(a,b) {
if (a < b) {
return a;
}
  return b;

}

console.log(min(5, 15));
// → 5
console.log(min(30, -10));
// → -10


//Exercise #2. Recursion

function isEven(num) {
  if (num - 2 === 0) {
    return true;
  }
  else if (num - 2 === 1) {
  return false;
  }
  else return isEven(num - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(31));
// → false


//Exercise #3. Bean counting
function countBs(testString) {
  var myArr = [];
  for (i = 0; i < testString.length; i++) {
 if (testString.charAt(i) === "B" || testString.charAt(i) === "b") {
 myArr.push(i);
 }
   }
  return myArr.length;
}

function countChar(testString, testLetter) {
  var myArr = [];
  for (i = 0; i < testString.length; i++) {
 if (testString.charAt(i) === testLetter) {
 myArr.push(i);
 }
   }
  return myArr.length;
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
