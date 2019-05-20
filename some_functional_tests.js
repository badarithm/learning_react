
// variable functions
const log = message => console.log(message)

const obj = {
    message: "Functions can be added to objects like variables",
    log(message) {
        console.log(message);
    },
};

obj.log(obj.message);

// example with arrays
const arrMess = [
    "Functions can be inserted into arrays",
    message => console.log(message),
    "like variables",
    message => console.log(message),
];

arrMess[1](arrMess[0]);
arrMess[3](arrMess[2]);

const insideFn = logger =>
    logger("Example of using function as argument in js.");

insideFn(message => console.log(message));

let createScream = function(logger) {
    return function(message)
    {
        logger(message.toUpperCase() + " ! ! !");
    }
};
// expressed in es6 syntax
let createScreamEs6 = logger => message => logger(message.toUpperCase() + "! ! !")

const scream = createScream( message => console.log(message));

scream("Sample of higher order functions");
scream("So in this case function was returned from another function");
scream("createScream returns a function");
scream("and scream invokes that returned function.");

/**
 * The following functions area quite meaningless
 * They are composed to mimic factorial-like functionality
 * @param number
 * @returns {number}
 */
// const zeroth = _ => 1
// const first = number => number * 1
// const second = number => number * 2
// const third = number => number * 3
// const fourth = number => number * 4
// const fifth = number => number * 5
//
// const loadAndMapMembers = compose(
//     zeroth(),
//     first(),
//     second(),
//     third(),
//     fourth(),
//     fifth()
// );

let color_lawn = {
    title: "lawn",
    color: "#00FF00",
    rating: 0
};

function rateColor(color, rating){
    return Object.assign({}, color, {rating: rating});
}

console.log((rateColor(color_lawn, 5).rating)); // will be 5
console.log(color_lawn.rating);                         // will be 4


let list = [
    {title : "Red Red"},
    {title : "Lawn"},
    {title : "Party Pink"},
];

var addColor = (title, colors) => {
    colors.push({title: title});
    return colors;
};

let addColorSpread = (title, list) => [...list, {title}];
let listWithGreen = addColorSpread("Glam Green", list);

console.log(listWithGreen, listWithGreen.length, list.length)