


////////////////////////////////////////////////////////////////////////////////////
// Panic
function panic(str){
    return str
        .split(' ')
        .join(' 😱 ')
        .toUpperCase() + "!";
}

// console.log(panic("I'm almost out of coffee"));
// console.log(panic("winter is coming"))



////////////////////////////////////////////////////////////////////////////////////
// Whisper
function whisper(str){
    if(str.endsWith("!")){
        return "shh... " + str.slice().toLowerCase();
    }
    return "shh... " + str.toLowerCase();
}

// console.log(whisper("PLEASE STOP SHOUTING."));
// console.log(whisper("MA'AM, this is a Wendy's!"));



////////////////////////////////////////////////////////////////////////////////////
// Alternating Caps
function altCaps(str) {
    return [...str].map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
}

// console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));



////////////////////////////////////////////////////////////////////////////////////
// Capitalize Word
function capitalizeWord(word) {
    return word.at(0).toUpperCase() + word.slice(1);
}

// console.log(capitalizeWord("pumpkin"));



////////////////////////////////////////////////////////////////////////////////////
// FizzBuzz
function fizzBuzz(num) {
    if(num % 3 === 0 && num % 5 === 0){
        return "FizzBuzz";
    } else if(num % 3 === 0){
        return "Fizz";
    } else if(num % 5 === 0){
        return "Buzz";
    } else {
        return num;
    }
}

// console.log(fizzBuzz(15));
// console.log(fizzBuzz(9));
// console.log(fizzBuzz(10));
// console.log(fizzBuzz(7));



////////////////////////////////////////////////////////////////////////////////////
// Emojify
const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}
function emojiWord(word) {
    if (!/^:.+:$/.test(word)) {
        return word;
    }

    const slice = word.slice(1, -1);
    return emojis[slice] ?? slice;
}

// console.log(emojiWord(":heart:"));
// console.log(emojiWord(":flower:"));
// console.log(emojiWord("elephant"));



////////////////////////////////////////////////////////////////////////////////////
// Is anagram
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const newStr1 = str1.split('').sort().join('');
    const newStr2 = str2.split('').sort().join('');

    return newStr1 === newStr2;
}

// console.log(isAnagram("allergy", "gallery"));



////////////////////////////////////////////////////////////////////////////////////
// Reverse String
function reverseString(str) {
    return [...str].reduce((acc, cur) => cur + acc, '');
}

// console.log(reverseString("olleh"));
// console.log(reverseString("dlrow"));



////////////////////////////////////////////////////////////////////////////////////
// Palindrome Checker
function palindrome(str) {
    const newStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const revStr = newStr.split('').reverse().join('');
    return newStr === revStr;
}

// console.log(palindrome("eye"));
// console.log(palindrome("bobby"));



////////////////////////////////////////////////////////////////////////////////////
// Remove Duplicates from string
function removeDupeChars(chars){
    return [...chars].reduce((acc, cur) => acc.includes(cur) ? acc : acc + cur,'')
    // return [...new Set(chars)].join('');
}

// console.log(removeDupeChars('9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23'));
console.log(removeDupeChars('aabbccb1212'));



////////////////////////////////////////////////////////////////////////////////////
// Count characters
function countChars(str) {
    const strLow = str.toLowerCase().replace(/\s/g, '');
    const strObj = {};

    for (const char of strLow) {
        strObj[char] = (strObj[char] || 0) + 1;
    }

    return strObj;
}

// console.log(countChars("Peggy Porrrrrth"));



////////////////////////////////////////////////////////////////////////////////////
// Remove Duplicates from array
function removeDuplicates(arr){
    return [...new Set(arr)];
    // return arr.filter((item, index) => arr.indexOf(item) === index);
}

// console.log(removeDupeNums([1,2,3,3,4,5,6,6,7,8,9,9,9,9,9,9,9,9,9,9,9]));
console.log(removeDuplicates([
    "🥓 bacon",
    "🥓 bacon",
    "🍳 eggs",
    "🫑 green peppers",
    "🧀 cheese",
    "🌶️ hot sauce",
    "🥓 bacon",
    "🥦 broccoli",
    "🧀 cheese",
    "🥦 broccoli",
    "🌶️ hot sauce"
]))



////////////////////////////////////////////////////////////////////////////////////
// Flatten Array
function flattenArray(arr) {
    let flattened = [];

    arr.forEach((item) => {
        if (Array.isArray(item)) {
            flattened = flattened.concat(flattenArray(item));
        } else {
            flattened.push(item);
        }
    });

    return flattened;
}

const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = flattenArray(nestedArray);
// console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]



////////////////////////////////////////////////////////////////////////////////////
// Find the winner
const gameNightFood = {
    "🍕 pizza": 3,
    "🌮 tacos": 10,
    "🥗 salads": 7,
    "🍝 pasta": 5
}

function findTheWinner(obj) {
    const [winner, votes] = Object.entries(obj).reduce(
        (acc, [food, votes]) => (votes > acc[1] ? [food, votes] : acc),
        ["", 0]
    );

    return winner !== "" ? `The winner is ${winner} with ${votes} votes.` : "No winner found.";
}

console.log(findTheWinner(gameNightFood));



////////////////////////////////////////////////////////////////////////////////////
// Sort products
function sortProducts(data){
    const sortedData = data.sort((a, b) => a.price - b.price)

    sortedData.forEach(item => console.log(`${item.product} ${item.price}`))
}

const listByCheapest = sortProducts([{product: "🍭", price: 2.99}, {product: "🍫",price: .99}]);
console.log(listByCheapest);



////////////////////////////////////////////////////////////////////////////////////
// Unique tags
// Expected output:
//     ["supernatural", "horror", "drama",
//         "fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]
//
//     */

function getUniqueTags(data){
    const tags = data.flatMap(item => item.tags)
    const uniqueTags = {}

    return tags.filter(tag => !uniqueTags[tag] && (uniqueTags[tag] = true))
    // return [...new Set(x)]
}

console.log(getUniqueTags());



////////////////////////////////////////////////////////////////////////////////////
// Flatten array with reduce, Random Number Generator with max and min

const awards = ["🏆", "⭐", "💎", "🥇", "👑"];

function getHosts(data){
    return data.reduce((acc, {hosts}) => [...acc, ...hosts], [])
}

const randomNum = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min

function assignAwards(data){
    return data.map(item => `${awards[randomNum(awards.length - 1)]} ${item}`)
}

console.log(getHosts(podcasts));
console.log(assignAwards(getHosts(podcasts)));



////////////////////////////////////////////////////////////////////////////////////
// Anagram array
function isAnagramInArray(anagram, arr) {
    const normalizeString = (str) => str.toLowerCase().replace(/\s/g, '');

    const sortedString = (str) => [...normalizeString(str)].sort().join('');

    return arr.filter((item) => {
        const a = sortedString(item);
        const b = sortedString(anagram);

        return a.length === b.length && a === b;
    });
}

const anagrams = ["Some", "example", "anagrams", "Bob Ziroll Scrimba Teacher"];
console.log(isAnagramInArray("Bob Ziroll Scrimba Teacher", anagrams));