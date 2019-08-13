// perfrom CRUD operations with file

const fs = require("fs");
const path = require("path");
const fileName = path.join(__dirname,"../data/data.json") ;
let data = [];

// sample data
// inserting the records
const requiredFields = ["firstname","email","phone","city"] ;

if(fs.existsSync(fileName)){
    data = JSON.parse(fs.readFileSync(fileName,"UTF-8"));

    fs.readdir
}

class ContactService{
    constructor(){

    }
    // iterate with each element and check if the id is found then return
    getContactById(id){
        console.log("Get Contact By Id " + id);
        
    }
    deleteContactById(id){
        console.log("Delete Contact By Id " + id);
    }
    updateContact(contact){
        console.log("Update Contact "+contact);
    }
    addNewContact(contact,callBackFn){
        console.log("Add new Contact "+contact);
        if(!callBackFn || typeof callBackFn != 'function'){
            let err = {code:1001,message:"Sorry, Please have a call back supply"};
            callBackFn(err);
            return;
        }
        if(!contact || typeof contact !='object'){
            let err =  {code:1002,message:"Sorry please pass Object"};
            callBackFn(err);
            return;
        }

        // checking for the requied fields
        const missingFields=[];
        requiredFields.forEach(field=>{
            if(!(field in contact)){
                missingFields.push(field);
            }
        });
        if(missingFields.length){
            let err={code:1003,message:"Please pass mandatory fields  missing fields are "+ missingFields.join(",")}
            callBackFn(err);
        }
        if(data.length===0){
            contact._id = 1;
        }else{
            contact._id=data.length+1;
        }
        console.log("Generated Contact Id "+ contact._id);

        data.push(contact);
        fs.writeFile(fileName,JSON.stringify(data),(err)=>{
            if(err){
                callBackFn(err);
                return;
            }
            callBackFn(null,{...contact});
        })
    }
    getAllContact(options , callBackFn){
        if(!callBackFn || typeof callBackFn !=='function'){
            throw new  "Sorry callback function is not supplied , so not executed" ; 

        }
        
        let {pageNum=1 ,pageSize=10}=options;
        if(typeof pageNum !='number' || typeof pageSize !=='number'){
            let err = {code:1003,message:"Please enter Page number and page size "};
            callBackFn(err);
            return;
        }
        //since arrays starts form '0' 
        let begin = (pageNum-1)*pageSize;
        let end = begin + pageSize;
        let newData = data.slice(begin,end);
        callBackFn(null,newData);
}
}
module.exports = new ContactService();