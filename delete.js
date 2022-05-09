var fs=require("fs");

fs.unlink("filebaru.txt", function(err){
    if (err) throw err;
    console.log("File deleted");
})