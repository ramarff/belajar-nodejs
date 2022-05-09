var db=require("./db_config");

db.connect(function(err){

 let sql="SELECT * FROM customers";
 db.query(sql, function(err, result){
     if (err) throw err;
    //gunakan perulangan untuk menampilkan data
    console.log(`ID \t NAME \t\t ADDRESS`);
    console.log(`----------------------------------------------------------`);
    result.forEach(cust => {
        console.log(`${cust.id} \t ${cust.name} \t ${cust.address}`);
    })

 })
})