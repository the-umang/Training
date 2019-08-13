let p1 = {
    name:"Umang",
    city:"Bangalore",
    email:"umang@gm.com"
};
console.log(p1);
 
let name1= p1.name;
let city1= p1.city;
let email1=p1.email;
console.log(name1);
console.log(city1);
console.log(email1);
console.log("-----------------------")

let {name,city,email}=p1;
console.log(name);
console.log(city);
console.log(email);
// same name is a must for this kind of assignment
// doesnot care for the number of parameters and place of the parameter it will invoke by mapping

function sayHello1(name,city){
    console.log("Function - Name " +name);
    console.log("Function - City " +city);
}
function sayHello({name,city}){
    console.log("Function - Name " +name);
    console.log("Function - City " +city);
}



sayHello1("A","b");
console.log("--------------");

sayHello(p1);