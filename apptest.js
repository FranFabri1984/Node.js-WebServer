const http = require('http');

http.createServer((req, res) => {

    console.log(req);
    //res.writeHead(200, {'Content-Type': 'application/json'});
    res.setHeader('Content-Disposition', 'attachment; filename.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write('id, nombre\n');
    res.write('1, John\n');
    res.write('2, Josh\n');
    res.write('3, Jen\n');
    res.write('4, Jelly\n');
    res.end();
})

.listen(8080);

console.log('Listening port:', 8080 );