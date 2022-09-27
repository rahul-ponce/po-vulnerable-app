const express = require('express')
const axios =  require('axios')
const protectonce = require('protectonce')
const app = express()
const port = 3003

app.get('/:method',(req, res,next) => {
    const sqlite = require("sqlite3");
    let sql = new sqlite.Database(":memory:");
    method = req.params.method;
    res.send(`got request input: ${req.query.name}, method: ${method}`);
    // sql.serialize(() => {
    //     sql.run(`CREATE TABLE someTable (someField TEXT);`);
    //     sql.run(`INSERT INTO someTable VALUES ("admin")`);
    //     sql.run(`INSERT INTO someTable VALUES ("test")`);
    //     try {
    //         sql[method](`SELECT * from someTable WHERE someField="${req.query.name}";`);

    //     } catch (e) {
    //         // This should ideally send 500 and internal server error
    //         // however since the server and client are running in same process,
    //         // express is failing to handle this. Hence this workaround
    //         res.status(201).send('Failed');
    //     }
    // });
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})