var http=require("http");
var qs=require("querystring");
var fs=require("fs");

http.createServer(function(req, res){
    if(req.url === "/login/" && req.method === "GET"){
        fs.readFile("login_form.html", (err, data) => {
            if(err){
                res.writeHead(404, {"Content-Type":"text/html"});
                return res.end("404 Not Found");
            }
            //kirim form login_form.html
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(data);
            return res.end();
        });
    }
    if(req.url === "/login/" && req.method === "POST"){
        //ambil data dari form
        var requestBody="";
        req.on("data", function(data){
          //tangkap data dari form
          requestBody += data;
          
          //kirim balasan jika datanya terlalu besar
          if(requestBody.length > 1e7){
              res.writeHead(413, "Request Entity Too Large", {"Content-Type":"text/html"});
              res.end('<!doctype html><html><head><title>413</title></head><body>413: Request Entity Too Large</body></html>');
          }
        })
    }
    
    //kita sudah dapat datanya
    //langkah berikutnya tinggal diparse
    req.on("end", function(){
        var formData=qs.parse(requestBody);

        //cek login
        if(formData.username === "petanikode" && formData.password   === "kopi"){
          res.writeHead(200, {"Content-Type":"text/html"});
          res.write("<h2>Selamat Datang Bos!</h2>");
          res.write("<p>Username:"+formData.username+"</p>");
          res.write("<a href='/login/'>Kembali</a>");
          res.end();
        }else{
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write("<h2>Login gagal</h2>");
            res.write("<a href='/login/'>coba lagi");
            res.end();
        }
    })
}).listen(8000);
console.log("Server is running on https://localhost:8000");