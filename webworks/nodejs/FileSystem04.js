// to create a file and keep the data for exception show the message

const  fs  =require('fs');

fs.writeFile("./files/sample1.txt","This is sample data2" , (err)=>{
    if(err){
        console.log("File not saved" , err);
    }else{
        console.log("Data Stored successfully");

    }
})

fs.readFile("./files/sample1.txt","UTF-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})