var http=require("http");

var server=http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("URL:"+req.url);
    res.end();
})

server.listen(8000);

console.log("Server running on http://localhost:8000");