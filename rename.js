var fs=require("fs");

fs.rename("webserver.js","ramasayyidah.js", function(err){
    if (err) throw err;
    console.log("File Renamed");
})