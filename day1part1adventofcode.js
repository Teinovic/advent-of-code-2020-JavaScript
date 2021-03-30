let fs = require("fs");
let text = fs.readFileSync("./input.txt").toString();
let textByLine = text.split("\n")
textByLine = textByLine.map((x) => +x)

let result = () => {
    for(let i=0; i<=textByLine.length; i++) {
        for(let j=0; j<=textByLine.length; j++) {
            if (textByLine[j] + textByLine[i] === 2020) {
                return textByLine[j] * textByLine[i]
            }
        }
    }
}

console.log(result())
