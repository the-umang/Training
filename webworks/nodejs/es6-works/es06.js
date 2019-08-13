class Person{
    // constructor(){
    //     this.name="Umamg";
    //     this.email="umang@gmail.com";
    // }
    constructor(_name,_email){
        this.name=_name;
        this.email=_email;
    }
    printPerson(){
        console.log("Name is  : " + this.name + " email is : " + this.email);
        
    }
}

// let p1 = new Person();
// console.log(p1);
// let p2=new Person("Mayur" , "mayur@gm.com");
// console.log(p2);
// // a class can only have one constructor

// let p3 = new Person("kumar");
// console.log(p3);

class Employee extends Person{
    constructor(_name,_email,_age){
        super(_name,_email);
        this.age=_age;
    }
}
let e1 = new Employee("Umang","umang@gm.com",21);
console.log(e1);
