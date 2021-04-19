const http = require('http');
const fetch = require('node-fetch');
const fs = require('fs');

fetch('http://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(json => {
    let data = JSON.stringify(json, null, 2);

    fs.writeFile('result/posts.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});
})
const server = http.createServer(function(req, res) {


    res.writeHead(200);
    res.end('Hello world');


});

//create a server
server.listen(4000, () => {
    console.log('Yes, you have created a server!');

});
