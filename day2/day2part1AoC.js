let fs = require("fs");
let text = fs.readFileSync("./day2/input.txt").toString();
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
        let leastAmountOfLettersAllowed = parseInt(input[i][0])
        let amountOfLettersInThePassword = letterCounter(input[i][4], input[i][2])
        let theHighestAmountOfLettersAllowed = parseInt(input[i][1])

        if (leastAmountOfLettersAllowed <= amountOfLettersInThePassword && 
        amountOfLettersInThePassword <= theHighestAmountOfLettersAllowed) {
            counter += 1
        }
    }
    return counter
}

console.log(countValidPasswords(textByLine))
