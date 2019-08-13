//delete 
const {deleteEmployee} = require("../services/mongo-emps-services");
const _id = "5d43ccc252026c920cffdb34";

deleteEmployee(_id).
then(data=>console.log("Id deleted : " + data)).
catch(err=>console.log(err));