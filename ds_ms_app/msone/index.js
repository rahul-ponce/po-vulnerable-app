const express = require('express')
const axios =  require('axios')
const app = express()
const port = 3001

app.get('/',(req, res,next) => {

    res.send("Get on 3001 called");
    // axios.get("http://localhost:3001")
    // .then((data) => {
    //     res.send(data.data)
    // })
    // .catch(err => next(err));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})