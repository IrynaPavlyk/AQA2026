// Easy level
//1. Find all images on the page.
let allImages = document.images;
console.log(allImages ? "All images are found" : "Images are NOT found");

//2. Find images that are icons on the web.
// Збираємо іконки сайту з тегів <link> у <head>
const linkIcons = Array.from(document.querySelectorAll('link[rel*="icon"]'))
    .map(link => link.href);

// Збираємо картинки <img>, які мають "icon" у посиланні (src)
const bodyIcons = Array.from(document.images)
    .map(img => img.src)
    .filter(src => src.includes('icon') || src.includes('apple-touch-icon'));

// Об'єднуємо все в один масив без дублікатів
const allIcons = [...new Set([...linkIcons, ...bodyIcons])];

console.log(allIcons);
//3. Find all button elements present on a specified web page
let allButtons = document.querySelectorAll('button');
console.log(allButtons ? "All buttons are found" : "Buttons are NOT found");

//4. Find all input fields on a web page.
let allInputs = document.querySelectorAll('input');
console.log(allInputs ? "All input fields are found" : "Input fields are NOT found");

//5. Find the link that is responsible for going to the map to find a place to buy eco-bags.
let linkToEcoBug = document.querySelector("a[href='#/places']");
console.log(linkToEcoBug ? "The link is found" : "The link is NOT found");

//Medium level
//Task 1
/*On a Home page, there are a series of images. Write a script that:

    Iterates through all the images on the page.
    Logs to the console those images that have a height greater than 300 pixels.
    After analyzing all images, displays in the console the total number of images that meet the condition.
 */
let allImages = document.querySelectorAll('img');
let count = 0;
for (let image in allImages) {
    if ((allImages[image]).height > 300) {
        console.log(allImages[image]);
        count++;
    }
}
console.log(count);
//Task 2
//Display the number of unique colors used in the elements on the page.
let allElements = document.querySelectorAll("*");
let myArray = [];


for (let element of allElements) {
    let computedStyle = window.getComputedStyle(element);

    myArray.push(computedStyle.color);
    myArray.push(computedStyle.backgroundColor);
}

console.log("Усі знайдені кольори (з дублікатами):", myArray);

let unique = myArray.filter((item, i, ar) =>
    item &&
    item !== 'rgba(0, 0, 0, 0)' &&
    item !== 'transparent' &&
    ar.indexOf(item) === i
);

console.log("Кількість унікальних кольорів:", unique.length);

//Task 3
//Find all button elements present on a specified web page and output the cumulative quantity of these buttons.
let allButtons = document.querySelectorAll('button');
console.log(allButtons.length);

//Task 4
//Find and determine the types of all input fields (input) on a web page.
let allInputs = document.querySelectorAll('input');
let myArray = [];

for (let input of allInputs) {
    myArray.push(input.type);
}

console.log(myArray);
//Task 5
//Utilizing CSS selectors in conjunction with JavaScript, identify all the social media button elements
// present on a specified web page and determine their respective destination URLs.

// 1. Ключові слова для пошуку соцмереж
const platforms = ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube', 'pinterest', 'tiktok', 'telegram'];

// 2. CSS-селектори для пошуку посилань та кнопок
const selectors = [
    'a[href*="facebook.com"]', 'a[href*="twitter.com"]', 'a[href*="x.com"]',
    'a[href*="instagram.com"]', 'a[href*="linkedin.com"]', 'a[href*="youtube.com"]',
    'a[href*="pinterest.com"]', 'a[href*="tiktok.com"]', 'a[href*="t.me"]',
    '[class*="social" i]', '[id*="social" i]',
    'button[class*="fb" i]', 'button[class*="tw" i]', 'button[class*="ig" i]', 'button[class*="chat-pop-up"]'
];

// 3. Знаходимо всі елементи за селекторами
const elements = document.querySelectorAll(selectors.join(','));
const results = [];

elements.forEach(el => {
    let url = '';

    // Перевіряємо, чи це посилання <a>, чи кнопка з дата-атрибутом/текстом
    if (el.tagName === 'A') {
        url = el.href;
    } else {
        // Іноді кнопки мають URL у дата-атрибутах або всередині тегу <a>, що захований в них
        const nestedLink = el.querySelector('a');
        url = nestedLink ? nestedLink.href : (el.dataset.url || el.getAttribute('formaction') || 'Кнопка без прямого URL');
    }

    // Визначаємо платформу на основі тексту, класів або URL
    const stringToTest = `${url} ${el.className} ${el.id}`.toLowerCase();
    const platform = platforms.find(p => stringToTest.includes(p)) || 'unknown-social';

    // Ігноруємо порожні або нерелевантні посилання (наприклад, просто "share" без URL)
    if (url && url !== window.location.href && !url.startsWith('#')) {
        results.push({
            element: el,
            platform: platform,
            destinationUrl: url
        });
    }
});

// Прибираємо дублікати за URL
const uniqueResults = Array.from(new Map(results.map(item => [item.destinationUrl, item])).values());
console.log(uniqueResults);

//Hard level
//Task 6
/* Log into your profile at https://www.greencity.cx.ua/#/profile, there is a calendar that displays the week,
with navigation buttons (previous/next) and the days of the week.

1. Determine the current day: Locate the day that has the class current-day and display its value. (Expected result,
 for example, "Current day: 20 September 2024").
2. Check for navigation buttons: Ensure there are two navigation buttons (previous/next) and display their images.
3. Determine the displayed days of the week: Collect all elements with the class days-name and display their names.
*/
//1.
let monthYear = document.querySelector("div.week");
let text = monthYear.innerText;

let day = document.querySelector(" div.day-number.current-number.ng-star-inserted").innerText;

let year = text.slice(text.length - 4, text.length);

let month;
const monthMatch = text.match(/[A-Za-z]+/);
month = monthMatch ? monthMatch[0] : null;

let data = "Current day: " + day + " " + month + " " + year;
console.log(data);
//2.
let buttonPrevious = document.querySelector("button img.arrow-previous");
console.log(buttonPrevious);

let buttonNext = document.querySelector("button img.arrow-next");
console.log(buttonNext);
//3.
let AllDaysName = document.querySelectorAll("*.day-name");
for (day in AllDaysName) {
    console.log((AllDaysName[day]).innerText);
}