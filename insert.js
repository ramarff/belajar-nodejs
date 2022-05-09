var db=require("./db_config");

db.connect(function(err){
    let sql=`INSERT INTO customers (name, address) VALUES ('Starbucks','City Plaza')`;
    db.query(sql, function(err, result){
        if (err) throw err;
        console.log("1 record inserted");
    })
})