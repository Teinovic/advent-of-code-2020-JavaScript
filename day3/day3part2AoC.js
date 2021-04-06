let fs = require("fs");
let text = fs.readFileSync("./day3/input.txt").toString();
let tobogganInput = text.split("\n")


function treesCut(start=0, right=3, down=1) {
    let positionOnSlope = 0
    let treesCutCounter = 0
    for (let slopeLocationIndex=start; slopeLocationIndex<tobogganInput.length; slopeLocationIndex += down) {
        let slope = tobogganInput[slopeLocationIndex]
        if (slope[positionOnSlope] === '#') {
            treesCutCounter += 1
        }
        positionOnSlope += right
        positionOnSlope = positionOnSlope % slope.length
        
    }
    return treesCutCounter
}

function treesCutByFiveTrajectoriesMultiplied() {
    return treesCut(0, 1) * treesCut(0, 3) * treesCut(0, 5) * treesCut(0, 7) * treesCut(0, 1, 2)
}

console.log(treesCutByFiveTrajectoriesMultiplied())