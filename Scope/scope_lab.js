// Global scope

var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
//Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
// console.log(blockVar);
// console.log(blockLet);


function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();
    
// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

{
var taskVar = "I'm a block-scoped var";
let taskLet = "I'm a block-scoped let";
const taskConst = "I'm a block-scoped const";

// Try to reassign these variables within the curly braces {}. 
// Check for any errors that may occur.

// taskVar = "I am a block-scoped var";
// taskLet = "I am a block-scoped let";
// taskConst = "I am a block-scoped const"; // TypeError: Attempted to assign to readonly property.

}
// Try to reassign the same variables outside the block {} and 
// check if assignment outside the sope of variables where the variables are assigned can be done or not.
taskVar = "I am a block-scoped var";
taskLet = "I am a block-scoped let";
taskConst = "I am a block-scoped const"; 

// Assignment outside the sope of variables where the variables are assigned can be done
console.log(taskVar); 
console.log(taskLet); 
console.log(taskConst); 

