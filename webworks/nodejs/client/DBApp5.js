const {updateEmployee} = require("../services/mongo-emps-services");
const emp = {
    "salary" : 10000 };
const id = "5d43ccf252026c920cffdb35";

updateEmployee(id,emp).
then(emp=>console.log("Id updated : " + emp)).
catch(err=>console.log(err));