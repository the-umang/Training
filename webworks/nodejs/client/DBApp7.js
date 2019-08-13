//get desc order of name
const {getAllEmployee} = require("../services/mongo-emps-services");
getAllEmployee().
then(data=>console.log(data)).
catch(err=>console.log(err));