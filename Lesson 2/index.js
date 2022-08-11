//File System = fs

const fs = require('fs');

// // How to create and write file using asynchronous method
fs.writeFile("demo1.txt", "My name is Nur Alam", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("asynchronous method Successful")
    }
});

// // How to create and write file using synchronous method
var result = fs.writeFileSync("demo1.txt", "My name is Nur Alam");
if(result){
    console.log(result);
}else{
    console.log("synchronous method Successful")
}

// // How to update file
fs.appendFile("demo1.txt", ". I am 30 years old", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Updated Successful")
    }
})

// How to read file
fs.readFile("demo3.txt", 'utf-8', (err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data)
    }
})

// // How to rename file
fs.rename("demo2.txt", 'demo3.txt', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("successfully renamed")
    }
})


// // How to delete file
fs.unlink('demo2.txt', (result)=>{
    if(result){
        console.log("successfully deleted");
    }else{
        console.log("successfully not deleted")
    }
})

// // How to check the existance
fs.exists('demo3.txt', (result)=>{
    if(result){
        console.log("found");
    }else{
        console.log("not found")
    }
})