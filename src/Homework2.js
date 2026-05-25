// Task1
function isTextPresentOnPage(input) {
    //Get all text on the webpage
    let documentText = document.body.innerText || document.body.textContent;
    // Convert text to lower case
    documentText = documentText.toLowerCase();

    //Check if specific text is present on the page
    return documentText.includes(input);
}

//Example of usage
const searchText = "Some text";
const isPresent = isTextPresentOnPage(searchText);

if (isPresent) {
    console.log(`The ${searchText} is present on the webpage.`);
} else {
    console.log(`The ${searchText} is NOT present on the webpage.`);
}


// Task2
function filterGreaterThenNumber(arrays, number) {
    // Return new array with numbers bigger then the number
    return arrays.filter(element => element > number);
}

//Example of usage
console.log(filterGreaterThenNumber([1, 8, 6, 3, 9, 10, 100], 7));


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

//Example of usage
console.log(generatePassword(12));

//Task4 додано у окремому файлі