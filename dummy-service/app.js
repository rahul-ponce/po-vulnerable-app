require('@protectonce/agent');
const express = require('express')
var router = express.Router();
var cors = require('cors')

const app = express()
const port = 4000
app.use(cors())
app.use(router);

console.log('coming inside app.js ....');

const httpProxyMiddleware = require('http-proxy-middleware')

const options = {
    target: 'http://localhost:3000/', // target host
    changeOrigin: true, // needed for virtual hosted sites
}

router.get('/api/test', (req,res) => {

  res.status(200).send('Success Bos!!clear');
});

router.put('/api/Products/6', httpProxyMiddleware.createProxyMiddleware(options));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
