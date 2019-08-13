// function with various kind of values

function myTag(string , p1, p2){
    console.log("String" + string);
    console.log(p1,p2);
    console.log(arguments);
    
    
}

let name = "Himanshu";
let age=24;
let s1 = myTag `${name} is ${age} years old`;

console.log(s1);

// ... is called spread operator
function myTag1(string , ...args){
    console.log(string);
    console.log(args);
    
    
}
console.log("----------------------------");

myTag1 `${name} is ${age} years old`;

// String, is , years old
// Himanshu 24
// [Arguments] { '0': [ '', ' is ', ' years old' ], '1': 'Himanshu', '2': 24 }
// undefined
// [ '', ' is ', ' years old' ]
// [ 'Himanshu', 24 ]
// PS C:\Users\umamundh\Desktop\training files\webworks\nodejs\es6-works> node .\es02.js
// String, is , years old
// Himanshu 24
// [Arguments] { '0': [ '', ' is ', ' years old' ], '1': 'Himanshu', '2': 24 }
// undefined
// ----------------------------
// [ '', ' is ', ' years old' ]
// [ 'Himanshu', 24 ]