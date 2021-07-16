// variables
let language = 'Javascript';
console.log(language);

// object
let mobile = {
    brand : 'Apple',
    color : 'Silver',
    price : 35000
};
console.table(mobile);

// array
let colors = ['white', 'black', 'silver' , 'purple'];
console.table(colors);

// employees Array
let employees = [
    {
        id : 101,
        name : 'John',
        age : 45,
        designation : 'Manager'
    },
    {
        id : 102,
        name : 'Wilson',
        age : 55,
        designation : 'Sr.Manager'
    },
    {
        id : 103,
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer'
    }
];
console.table(employees);

// function
let greet = (name) => {
    let result = `Hello! ${name}`;
    console.log(result);
};
greet('Naveen');
