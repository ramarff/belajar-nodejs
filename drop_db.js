var db=require("./db_config");

db.connect(function(err){
    let sql="DROP database rama";
    db.query(sql, function(err, result){
        if (err) throw err;
        console.log("DROP Databse is successfully");
    })
})