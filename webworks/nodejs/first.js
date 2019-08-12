const sum =(num1,num2)=>num1+num2;


const PI = 3.14;
class MyBusinessLogic{
    constructor(name){
        console.log("Obj created");
        this.name=name;
    }
}
// // version 1
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.MyBusinessLogic = MyBusinessLogic ;


module.exports={sum:sum,PI:PI,MyBusinessLogic:MyBusinessLogic};