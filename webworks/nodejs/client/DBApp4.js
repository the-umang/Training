const {addNewEmp} = require("../services/mongo-emps-services");
const emp = {
    empid: 1077,
  empname: 'Pappu',
  contact: '112222',
  email: 'pappu@gmail.com',
  city: 'Banglore',
  salary: 1221 };


  addNewEmp(emp).then(id=>console.log("Id generated : " + id)).catch(err=>console.log(err));