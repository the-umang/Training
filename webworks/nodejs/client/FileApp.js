const {addNewContact} = require("../services/file-contact-service");

const contact = {
    firstname: "Umang",
    lastname: "Mundhara",
    gender: "Male",
    email: "glascell2i@squarespace.com",
    phone: "3346563056",
    dob: "1997-03-03",
    address: "73696 Dennis Street",
    city: "Montgomery",
    state: "Alabama"
};

addNewContact(contact,(err,newContact)=>{
    if(err){
        console.log("Error : " + JSON.stringify(err));
        
    }else{
        console.log(newContact);
        
    }
})