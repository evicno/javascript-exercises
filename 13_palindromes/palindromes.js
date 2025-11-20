const palindromes = function (string) {
let pureString = string.toLowerCase()
                    .replaceAll(" ", "")
                    .replaceAll(".", "")
                    .replaceAll(",", "")
                    .replaceAll("?", "")
                    .replaceAll("!", "")
                    .split("");
let length = pureString.length;
for (let i = 0; i < (length / 2 - 1); i++) {
    if (pureString[i] != pureString[length - i - 1]) {
        return false;
    }
}
return true;
};

// Do not edit below this line
module.exports = palindromes;
