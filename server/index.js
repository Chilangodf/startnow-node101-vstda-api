const server = require('./app');
const port = 8484;

// write your code here

server.listen(port, ( sucess, error) =>{
    console.log('Now is listening on http://localhost:8484');
});