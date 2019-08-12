// to show event driver programming with nodejs
// event is the implicit module available in nodejs
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
eventEmitter.on("myjob",()=>{
    console.log("Sample event is invoked");
}
);

eventEmitter.on("maths",(num1,num2)=>{
    console.log(num1+num2);
});
eventEmitter.emit("myjob");
eventEmitter.emit('maths',10,20);

class Person extends EventEmitter{
    constructor(name,salary){
        super();
        this.__name=name;
        this.__salary=salary;
    }
    get name(){
        return this.__name;
    }
    set name(name){
        this.__name=name;
    }
    get salary(){
        return this.__salary;
    }
    set salary(salary){
     this.__salary=salary;
    }
}

let person1 = new Person("Umang",1111);
let person2 = new Person("Mayur",111);

person1.on("person",()=>{
    console.log("Person name : "+person1.name);
    console.log("Person salary : "+person1.salary);

});

person2.on("person",()=>{
    console.log("Person name : "+person2.name);
    console.log("Person salary : "+person2.salary);

});

person1.emit("person");
person2.emit("person");