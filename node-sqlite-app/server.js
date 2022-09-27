require('@protectonce/agent');
// // require('sqreen');
// require('@protectonce/agent');
// const express = require('express');
// const app = express();
// const port = 4300;


// var sqlite3 = require('sqlite3');
// var db = new sqlite3.Database('app/data/sqlitedb');
// var bodyParser = require("body-parser");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// require('./app/routes')(app, db);

// app.listen(port, () => {
//     console.log('Backend NodeJS live on ' + port);
// });


const agent = require('@protectonce/agent');
const express = require('express');
const app = express();
const port = 4300;

var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('app/data/sqlitedb');
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(agent.middleware);
var testMw = function (request, response, next) {
    console.log('testMw gets called !!  ',request.headers);
    if(request.headers && request.headers.userName) {
        request.protectonce.reportAuth(request.headers.userName); 
    }
    // request.protectonce.reportAuth('Yash');
    //request.protectonce.reportSignup('Neha');
    // request.protectonce.reportLogin(true, 'Mike');
    //request.protectonce.reportLogin(true, 'Atul');
    next();
}

app.use(testMw);

require('./app/routes')(app, db);

app.listen(port, () => {
    console.log('Backend NodeJS live on ' + port);
});
