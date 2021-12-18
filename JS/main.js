const words = require("fs").readFileSync("../words.txt").toString().split("\n");  // one liner because why not
var longestWord = "";

for (var i of words) {
    if (i.length > longestWord.length && !i.match(/[gkmqvwxzio]/)) {  // all checks on one if, no continues
        longestWord = i;
    }
}

console.log(longestWord);