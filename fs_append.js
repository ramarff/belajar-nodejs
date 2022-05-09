var fs=require("fs");

//create a file named mynewfile1.txt
fs.appendFile("filebaru.txt", "Hello dari PetaniKode", function(err){
    if (err) throw err;
    console.log("saved!");
})