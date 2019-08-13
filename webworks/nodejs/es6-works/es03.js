let names = ["A","B","C","D"];
//  to get the first character 

let chars = names.map((value)=>value.charAt(0));

console.log(chars);

// output - [ 'A', 'B', 'C', 'D' ]

let indexPos = names.findIndex((value)=> value==='C');
console.log("Value found @ " + indexPos);
