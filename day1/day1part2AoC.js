let fs = require("fs");
let text = fs.readFileSync("./input.txt").toString();
let textByLine = text.split("\n")
textByLine = textByLine.map((x) => +x)
console.log(textByLine)

let result = () => {
    for(let i=0; i<=textByLine.length; i++) {
        for(let j=0; j<=textByLine.length; j++) {
            for(let k=0; k<=textByLine.length; k++) {
                if (textByLine[j] + textByLine[i] + textByLine[k] === 2020) {
                    return textByLine[j] * textByLine[i] * textByLine[k]
                }
            }
        }
    }
}

console.log(result())
