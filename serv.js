var http=require('http')
var lib = require('fs')
var server=http.createServer((function(request,response)
{
        
response.writeHead(200,{"Content-Type" : "text/html"});
lib.readFile('index.html',function(error,data){
if(error){
response.writeHead(404)
response.write('server not found')
}
else{
response.write(data)
}
response.end()
})



       
        
	
}));
console.log('server is listening on port 8080')
server.listen(8080);