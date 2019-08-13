const {getEmployeeById} = require('../services/mongo-emps-services');
const id ="5d43ccc252026c920cffdb34";

getEmployeeById(id).then(data => console.log(data)).catch(err=>console.log(err));
