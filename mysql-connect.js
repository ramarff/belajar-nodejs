var mysql=require("mysql");

var conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"BAGUVIX645"
});

//Membuka koneksi ke database MYSQL
conn.connect(function(err){
    if(err){
        // throw err;
    }else{
        console.log("Koneksi dengan id"+connection.threadId())
    }
})
//Query bisa dilakukan di sini
var create_db="CREATE DATABASE IF NOT EXISTS ebook";
conn.query(create_db, function(err, result){
    if(err){
        // console.log(err);
    }else{
        console.log(result);
    }
})

var ebook = {
    id: 1,
    title: 'Wiro Sableng Pendekar Kapak Maut Naga Geni 212 : Batu Tujuh Warna',
    pengarang: 'Bastian Tito'
    }
    var insert_sql = 'INSERT INTO ebook SET ?';
    connection.query(insert_sql, ebook, function(err, result){
    err ? console.log(err): console.log(result);
});

var ebook = {
    id: 1,
    title: 'Wiro Sableng Pendekar Kapak Maut Naga Geni 212 : Batu Tujuh Warna',
    pengarang: 'Bastian Tito'
    }
    var insert_sql = 'UPDATE ebook SET title = ? WHERE id = ?';
    connection.query(insert_sql, [ebook.title, ebook.id], function(err, result){
    err ? console.log(err): console.log(result);
});

var ebook = {
    sql: 'INSERT INTO ebook SET pengarang = ?',
    timeout: 14000,
    values: ['Pramoedya Ananta Toer']
    }
    connection.query(ebook, function(err, result, fields){
    if(err) {
    console.log(err);
    } else {
    console.log(result);
    }
});
conn.end(function(err){
    if(err){
        // throw err;
    }else{
        console.log("Koneksi ditutup");
    }
});