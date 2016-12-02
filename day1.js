var input = "L3, R1, L4, L1, L2, R4, L3, L3, R2, R3, L5, R1, R3, L4, L1, L2, R2, R1, L4, L4, R2, L5, R3, R2, R1, L1, L2, R2, R2, L1, L1, R2, R1, L3, L5, R4, L3, R3, R3, L5, L190, L4, R4, R51, L4, R5, R5, R2, L1, L3, R1, R4, L3, R1, R3, L5, L4, R2, R5, R2, L1, L5, L1, L1, R78, L3, R2, L3, R5, L2, R2, R4, L1, L4, R1, R185, R3, L4, L1, L1, L3, R4, L4, L1, R5, L5, L1, R5, L1, R2, L5, L2, R4, R3, L2, R3, R1, L3, L5, L4, R3, L2, L4, L5, L4, R1, L1, R5, L2, R4, R2, R3, L1, L1, L4, L3, R4, L3, L5, R2, L5, L1, L1, R2, R3, L5, L3, L2, L1, L4, R4, R4, L2, R3, R1, L2, R1, L2, L2, R3, R3, L1, R4, L5, L3, R4, R4, R1, L2, L5, L3, R1, R4, L2, R5, R4, R2, L5, L3, R4, R1, L1, R5, L3, R1, R5, L2, R1, L5, L2, R2, L2, L3, R3, R3, R1";

var directions = input.split(','); // this is so much easier

var x = 0;
var y = 0;
direction = "North";
var coords = [];
function Coordinate(x, y) {
    this.x = x;
    this.y = y;
}

//Math.abs(number);

function getDirection(turn, currentDirection) {
    switch (currentDirection) {
        case 'North':
            return (turn === 'L') ? 'West' : 'East';
        case 'South':
            return (turn === 'L') ? 'East' : 'West';
        case 'East':
            return (turn === 'L') ? 'North' : 'South';
        case 'West':
            return (turn === 'L') ? 'South' : 'North';
    }
}

function addXAmount(currentDirection, amount, x) {
    var num = 0;

    if (currentDirection === 'East') {
        num = x + amount;
        for (var i = 0; i < amount; i++) {
            coords.push(new Coordinate(x + i, y));
        }
        return num;
    } else if (currentDirection === 'West') {
        num = x - amount;
        for (var i = 0; i < amount; i++) {
            coords.push(new Coordinate(x - i, y));
        }
        return num;
    }
}

function addYAmount(currentDirection, amount, y) {
    var num = 0;
    if (currentDirection === 'North') {
        num = y + amount;
        for (var i = 0; i < amount; i++) {
            coords.push(new Coordinate(x, y + i));
        }
        return num;
    } else if (currentDirection === 'South') {
        num = y - amount;
        for (var i = 0; i < amount; i++) {
            coords.push(new Coordinate(x, y - i));
        }
        return num;
    }
}


for (var i = 0; i < directions.length; i++) {
    var dir = directions[i];
    dir = dir.trim();

    var turn = dir.substring(0, 1);
    var amount = parseInt(dir.substring(1));

    direction = getDirection(turn, direction);
    if (direction === 'West' || direction === 'East') {
        x = addXAmount(direction, amount, x);
    } else {
        y = addYAmount(direction, amount, y);
    }
}

var found = false;
for (var i = 0; i < coords.length; i++) {
    for (var j = i + 1; j < coords.length; j++) {
        if (!found && coords[i].x === coords[j].x && coords[i].y === coords[j].y) {
            found = true;
            console.log("Intersection at (" + coords[i].x + ", " + coords[i].y + ").");
            var answer = Math.abs(coords[i].x) + Math.abs(coords[i].y)
            console.log("Distance: " + answer);
        }
    }
}

console.log("Number of coords: " + coords.length);


var blocks = Math.abs(x) + Math.abs(y);
console.log("Number of blocks: " + blocks);
