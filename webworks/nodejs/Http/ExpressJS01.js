// npm install express


const {getEmployeeById} = require('../services/mongo-emps-services');
//const id ="5d43ccc252026c920cffdb34";


const express = require("express");

const app = express();

app.get("/:id",(req,res)=>{
    getEmployeeById(req.params.id).then(data => console.log(data)).catch(err=>console.log(err));

})

// app.get("/example",(req,res)=>{
//     res.send("Example Route Called");
// })

// app.get("/example/:name/:age",(req,res)=>{
//     // http://localhost:3000/example/naveen/29
//     console.log(req.query);
//     console.log("--------------------------------------");
//     console.log("Name : "+req.params.name);
//     console.log("Age : "+req.params.age);

//     console.log(req.query);
//     //to invoke query params
//     // http://localhost:3000/example/naveen/29?city=bengalore&state=karnatake
//     console.log("City "+req.query.city);
//     console.log("State "+req.query.state);
// })
// app.listen(3000);