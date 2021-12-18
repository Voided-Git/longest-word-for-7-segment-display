var fs = require("fs");
var words = fs.readFileSync("../words.txt").toString();
words = words.split("\n");

var badLetters = /[gkmqvwxzio]/;  // Tom Scott added the 'i' and 'o'
var longestAcceptableWord = "";

for (var testWord of words) {
    if (testWord.length <= longestAcceptableWord.length) {  // Tom Scott did change this at some point to <
        continue;
    }

    if (testWord.match(badLetters)) {  // this used to be a one liner but decided to keep consistency
        continue;
    }

    longestAcceptableWord = testWord;
}

console.log(longestAcceptableWord);