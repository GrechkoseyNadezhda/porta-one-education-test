const mainStr =
    'The Tao gave birth to machine language. Machine language gave birth to the assembler. The assembler gave birth to the compiler. Now there are ten thousand languages. Each    language has its purpose, however humble. Each language expresses the Yin and Yang of software. Each language has its place within the Tao. But do not program in COBOL if you can avoid it. -- Geoffrey James, "The Tao of Programming"';

const cleanedStr = mainStr
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const mainArr = cleanedStr.split(" ");
console.log(mainArr);

const newArr = [];
for (let i = 0; i < mainArr.length; i++) {
    const uniqueLetter = findUniqueLetter(mainArr[i]);
    newArr.push(uniqueLetter);
}
console.log(findUniqueLetter(newArr.join("")));
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
