

const  fs  =require('fs');

// rename the file
// fs.rename("./files/sample.txt","./files/newsample.txt",(err)=>{
//     if(err){
//         console.log("File not renamed" , err);
//     }else{
//         console.log("file renamed");

//     }})


//Appending

// fs.appendFile("./files/sample1.txt","Some datas",(err)=>{
//     if(err){
//         console.log("File not appended" , err);
//     }else{
//         console.log("file Appended");

//     }})

// for(let file in files){
//     fs.unlink("./files"+file,(err)=>{
//         if(err){
//             console.log("Error : "+err);
            
//         }else{
//             console.log("Files Deleted Successfully");
//         }
//     })
// }


// list all the files present inside the directory

fs.readdir("./files", function(err, items) {
    console.log(items);
 
    for (let file in items) {
        // console.log(items[i]);
        fs.unlink("./files"+file,(err)=>{
            if(err){
                console.log("Error : "+err);
                
            }else{
                console.log("Files Deleted Successfully");
            }
        })
    }
});