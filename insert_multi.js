var db=require("./db_config");

db.connect(function(err){
    let sql="INSERT INTO customers (name, address) VALUES ?";
    var values=[
     ["JS Cofee","Highway 71"],
     ["3AM Cofee","Lowstreeet 4"],
     ["Apple Cafe","Apple st 652"],
     ["Laravel Cofee","Mountain 21"]
    ];
    db.query(sql, [values], function(err, result){
     if(err) throw err;
     console.log("Number of records inserted:"+result.affectedRows);
    })
})