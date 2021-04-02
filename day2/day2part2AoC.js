let fs = require("fs");
let text = fs.readFileSync("./inputday2.txt").toString();
let textByLine = text.split("\n")
textByLine = textByLine.map(element => element.split(/:| |-/))
textByLine.forEach(element => element.splice(3, 1))



let passFinder = (input) => {
    let passCount = 0

    for(let i=0; i < input.length-1; i++) {
        let letter = textByLine[i][2]
        let firstLocationOfLetterInWord = textByLine[i][3][parseInt(input[i][0] -1 )]
        let secondLocationOfLetterInWord = textByLine[i][3][parseInt(input[i][1] -1 )]

        if (letter === firstLocationOfLetterInWord && letter !== secondLocationOfLetterInWord) {
            passCount++
        } else if (letter !== firstLocationOfLetterInWord && letter === secondLocationOfLetterInWord) {
            passCount++
        }
    }
    return passCount
}
    

console.log(passFinder(textByLine))