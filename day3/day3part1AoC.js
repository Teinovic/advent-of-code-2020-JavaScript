let fs = require("fs");
let text = fs.readFileSync("./day3/input.txt").toString();
let tobogganInput = text.split("\n")



function treesCut(start=0, right=3) {
    let positionOnSlope = 0
    let treesCutCounter = 0
    for (let slopeLocationIndex=start; slopeLocationIndex<tobogganInput.length; slopeLocationIndex++) {
        let slope = tobogganInput[slopeLocationIndex]
        if (slope[positionOnSlope] === '#') {
            treesCutCounter += 1
        }
        positionOnSlope += right
        positionOnSlope = positionOnSlope % slope.length
        
    }
    return treesCutCounter
}

console.log(treesCut())