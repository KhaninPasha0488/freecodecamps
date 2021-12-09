// Only change code below this line
const myArray = [["Hanen", 21],["Pavel", 22]];

const myArray = [50, 60, 70];
const myData = myArray[0];

// Setup
const myArray = [18, 64, 99];
myArray[0] = 45;
// Only change code below this line

const myArray = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
   [[10, 11, 12], 13, 14],
 ];
 
 const myData = myArray[2][1];
 // Setup
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])
// Only change code below this line

// Setup
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();
// Only change code below this line

// Setup
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray =myArray.shift();
// Only change code below this line

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
// Only change code below this line

const myList = [["saiat",10],["saiatic",111],["saiatus",11],["saiaton",12],["saiatest",113] ];
reusableFunction()
function functionWithArgs(a,b) {
   console.log(a+b);
   }
   functionWithArgs(1,2);
   functionWithArgs(7,9);

   function  timesFive(num){
      return num * 5 ;
    }

    // Declare the myGlobal variable below this line
let myGlobal = 10 ;

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = myGlobal-5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

// Setup
let processed = 0;

function processArg(num) {
   return (num + 3) / 5;
   
}
processed = processArg(7)
// Only change code below this line

function nextInLine(arr, item) {
  // Only change code below this line
   arr.push(item);
  return arr.shift();
  
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function century(year) {
  // Finish this :)
  return Math.ceil(year /100)
}
if (wasThatTrue) {
  return "Yes, that was true";
}
return "No, that was false"

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
   
      return "Yes";
   
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20 || val <10) {
    return "Outside";
  }

  

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }else{

 
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);