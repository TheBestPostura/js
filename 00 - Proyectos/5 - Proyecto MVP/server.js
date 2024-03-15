let connect = require('connect');
let serverStatic = require('serve-static');

connect()
    .use(serverStatic(__dirname))
    .listen(8080, () => console.log('Server running on 8080...'));