const axios = require('axios');
const moment = require('moment');

var data = {
  "os": "OS name",
  "osVersion": "Version of OS",
  "agentRuntimeVersion": "version info for the runtime component",
  "agentCoreVersion": "version info for the core component",
  "runtime": "node",
  "runtimeVersion": "runtime version",
  "agentId": "234234XX",
  "subModules": [],
  "bom": [],
  "workLoadId": "temp1"
};

var config = {
    method: 'post',
   // url: 'https://iixwhpvvnra4bjnpr7y465vjj40ssehe.lambda-url.us-east-2.on.aws/',
        url: 'https://api.dev.protectonce.com/login',
  headers: {
    'Authorization': 'Basic YzNlZDM0MTYtMGU1My00Y2MzLTg3NmMtOWQ0MWU5NTAyMzI3OmMxMGFmZDFlLWVmYzktNGE2Yi04YWFmLTNmYmZkNmEwNzYwNA=='//staging
      //'Authorization': 'Basic ZTJiNzQ4MDQtY2EzNS00YTFkLWIyZjMtMDgwOTRiNGNlZGU0OjM5N2E2MmZmLWM1OTctNGJmMi04NjQzLWJhNjgzOTJjNTUwMQ==',//dev
      //'Authorization': chance.pickone(auths),
     //  'Content-Type': 'gzip',
   //    'Accept-Encoding': 'gzip'
    },
    data : data
  };

async function makeApiCall(config) {
  for (let i = 0; i < 10; i++){
        let start = moment(new Date());
    console.log(`Start Request: ${start.format(" DD MMM YYYY HH:mm:ss:ms")}`)
    let response = await axios(config)
      .then(function (response) {
          console.log("resp", response.status);
         // console.log(`Response: ${JSON.stringify(response.data)}`);
      })
      .catch(function (error) {
        console.log("error", error);
      });
      let end = moment(new Date());
      console.log(`End Request: ${end.format(" DD MMM YYYY HH:mm:ss:ms")}`)
    console.log(`Total processing time: ${end-start} milliseconds`)
}
}

makeApiCall(config)
