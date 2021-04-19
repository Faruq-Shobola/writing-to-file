const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {

  
    res.writeHead(200);
    res.end('Hello world');


});

//create a server
server.listen(4000, () => {
    console.log('Yes, you have created a server!');

});
