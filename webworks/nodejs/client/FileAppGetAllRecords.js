const {getAllContact} = require('../services/file-contact-service');
let option = {pageNum:1,pageSize:2};
getAllContact(option,(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
        
    }
})