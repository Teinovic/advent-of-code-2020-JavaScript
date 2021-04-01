let fs = require("fs");
let text = fs.readFileSync("./inputday2.txt").toString();
let textByLine = text.split("\n")
textByLine = textByLine.map(element => element.split(/:| |-/))



let letterCounter = (str, letter) => {
    let letterCount = 0
    for (let position = 0; position < str.length; position++) {
        if (str.charAt(position) === letter) {
            letterCount += 1
        }
    }
    return letterCount
}
    


let countValidPasswords = (input) => {
    let counter = 0
    for(let i=0; i < input.length-1; i++) {
        
        if (parseInt(input[i][0]) <= letterCounter(input[i][4], input[i][2]) && letterCounter(input[i][4], input[i][2]) <= parseInt(input[i][1])) {
            counter += 1
        }
    }
    return counter
}

console.log(countValidPasswords(textByLine))
