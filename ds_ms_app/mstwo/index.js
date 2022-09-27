const express = require('express')
const axios =  require('axios')
const app = express()
const port = 3002






let headers = {
  headers:{
    header1: "%00' UNION SELECT password FROM Users WHERE username-'tom'--"
  }
}

app.get('/',(req, res,next) => {
  axios.get("http://localhost:3003/:exec?name=execname", headers)
  .then((data) => {
      res.send(data.data)
  })
  .catch(err => next(err));
  // res.send("Get on 3002 called");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// it("Agent RASP should prevent SQL injection", async function () {
//   let res = await run_as_subprocess(() => {
//       require("@protectonce/agent")
//       const express = require('express')
//       const bodyParser = require('body-parser');
//       const app = express()
//       const port = 8000
//       app.get(`/:method`, (req, res) => {
//           const sqlite = require("sqlite3");
//           let sql = new sqlite.Database(":memory:");
//           method = req.params.method;
//           console.error(`got request input: ${req.query.name}, method: ${method}`);
//           sql.serialize(() => {
//               sql.run(`CREATE TABLE someTable (someField TEXT);`);
//               sql.run(`INSERT INTO someTable VALUES ("admin")`);
//               sql.run(`INSERT INTO someTable VALUES ("test")`);
//               try {
//                   sql[method](`SELECT * from someTable WHERE someField="${req.query.name}";`);

//               } catch (e) {
//                   // This should ideally send 500 and internal server error
//                   // however since the server and client are running in same process,
//                   // express is failing to handle this. Hence this workaround
//                   res.status(201).send('Failed');
//               }
//           });
//       })