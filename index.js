/*function countWords(input) {
    if (typeof input !== 'string') return 0;
    const tokens = input.match(/[\p{L}\p{N}]+/gu) || [];
    return tokens.length;
}
const textTitle = "GreenCity — Build Eco-Friendly Habits Today";
// const textTitle = document.title;
console.log(countWords(textTitle));


//Homework2
// Task1

// This is the task #1
function isTextPresentOnPage(input) {
    //Get all text on the page
    let documentText = document.body.innerText || document.body.textContent;
    // Convert text to lower case
    documentText = documentText.toLowerCase();

    //Check if specific text is present on the page
    return documentText.includes(input);
}

//Task2

const arrays = [1, 2, 7, 3, 4, 5, 6, 10];
const number = 5;
function filterGreaterThenNumber(arrays, number) {
    // return new array with numbers bigger then the number
    return arrays.filter(element => element > number);
}

console.log(filterGreaterThenNumber(arrays, 3))
console.log(filterGreaterThenNumber(arrays, number));
*/

//Task3

function generatePassword(length) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+";
    const allChars = letters + upperCaseLetters + numbers + specialChars;
    let password = '';

    password += letters[Math.floor(Math.random() * letters.length)];
    password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    for (let i = 0; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return password;
}

console.log(generatePassword(12));
