const mainStr = prompt("Введіть свій текст");

const cleanedStr = mainStr
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const mainArr = cleanedStr.split(" ");

const newArr = [];

for (let i = 0; i < mainArr.length; i++) {
    const uniqueLetter = findUniqueLetter(mainArr[i]);
    if (uniqueLetter === null) {
        break;
    } else {
        newArr.push(uniqueLetter);
    }
}
function findUniqueLetter(word) {
    const charCount = {};
    for (const char of word) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    for (const char of word) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}

const result = findUniqueLetter(newArr.join(""));

if (result === null) {
    alert("У вашому тексті нема унікальних значень");
} else {
    alert(`У вашому тексті першим унікальним символом є літера "${result}"`);
}
