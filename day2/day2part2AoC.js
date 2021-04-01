let fs = require("fs");
let text = fs.readFileSync("./inputday2.txt").toString();
let textByLine = text.split("\n")
textByLine = textByLine.map(element => element.split(/:| |-/))



let passFinder = (input) => {
    passCount = 0
    for(let i=0; i < input.length-1; i++) {
        if (textByLine[i][2] === textByLine[i][4][parseInt(input[i][0] -1 )] && textByLine[i][2] !== textByLine[i][4][parseInt(input[i][1] -1 )]) {
            passCount++
        } else if (textByLine[i][2] === textByLine[i][4][parseInt(input[i][1] -1 )] && textByLine[i][2] !== textByLine[i][4][parseInt(input[i][0] -1 )]) {
            passCount++
        }
    }
    return passCount
}
    

console.log(passFinder(textByLine))
