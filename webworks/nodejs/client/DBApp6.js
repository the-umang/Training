//delete 
const {deleteEmployee} = require("../services/mongo-emps-services");


deleteEmployee(_id).
then(data=>console.log("Id deleted : " + data)).
catch(err=>console.log(err));