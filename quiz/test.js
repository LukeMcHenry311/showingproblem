

var i = 0;
var x = 0;
var y = 0;
var z = 0;

// gryffindor === 1
function increment1() {
    i++;
    console.log(i);
};

// hufflepuff === 2
function increment2() {
    x++;
    console.log(x);
}

// ravenclaw === 3
function increment3() {
    y++;
    console.log(y);
}

// slytherin === 4
function increment4() {
    z++;
    console.log(z);
}

function blue() {
    console.log(Math.max(i, x, y, z))
}