// perfrom CURD operations with mongodb


const {MongoClient,ObjectId} = require("mongodb");
const url = 'mongodb://localhost:27017';


const requiredFields = ['empname' , 'email' , 'salary' , 'city'];

module.exports.getEmployeeById = async(id)=>{
    if(!id || typeof id !== 'string'){
        throw "Sorry ID supplied is not a string";
    }
    try{
        const _id = ObjectId(id);
        const conn = await MongoClient.connect(url,{useNewUrlParser:true});
        const emps = conn.db("sapientdb").collection("emps");
        const emp = await emps.findOne({_id});
        conn.close;
        return emp;
    }catch(err){
        throw err;
    }
}

module.exports.addNewEmp = async(emp)=>{
    //need to check if its object
    // check the missing fields
    const conn = await MongoClient.connect(url,{useNewUrlParser:true});
    const emps = conn.db("sapientdb").collection("emps");
    const response = await emps.insertOne(emp);
    conn.close;
    emp._id=response.insertedId;
    return emp;

}

module.exports.updateEmployee = async(id,emp)=>{
    const _id = ObjectId(id);
    const conn = await MongoClient.connect(url,{useNewUrlParser:true});
    const emps = conn.db("sapientdb").collection("emps");
    const response = await emps.updateOne({_id},{$set:emp});
    conn.close;
    return emp;
}



module.exports.deleteEmployee = async(id)=>{
    const _id = ObjectId(id);
    const conn = await MongoClient.connect(url,{useNewUrlParser:true});
    const emps = conn.db("sapientdb").collection("emps");
    const response = await emps.deleteOne({_id});
    conn.close;
    return emps;

}


module.exports.getAllEmployee = async()=>{
    const conn = await MongoClient.connect(url,{useNewUrlParser:true});
    const emps = conn.db("sapientdb").collection("emps");
    const response = await emps.find().sort({empname:1}).toArray();
    conn.close;
    return response;
}

