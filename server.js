var http =require('http');
function onRequest(request, reaponse){
response.writeHeader(200,{'Content-Type': 'text/plan'});
response.write('Hello World , Created by ram you can ram');
response.write('Hello World , Created by ram you can ram');
response.write('Hello World , Created by ram you can ram');
response.end();
}
http.createServer(onRequest).listen(8000);
