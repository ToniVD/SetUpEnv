let length;
let width;

function calculateArea() {
//The parseFloat() function converts the string value 
//retrieved from the input field to a floating-point number. 
length = parseFloat(document.getElementById('length').value);
width = parseFloat(document.getElementById('width').value);
let area = length * width;

// .innerText is used to modify the text content 
// within the HTML element.

document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}


