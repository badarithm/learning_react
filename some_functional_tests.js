
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