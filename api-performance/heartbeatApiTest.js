const moment = require('moment');
const axios = require('axios');
var data = {
    "hash": "python",
    "reports": [
      {
        "request_id": "128",
        "status_code": "300",
        "request_path": "POST/login/",
        "request_verb": "POST",
        "ip_addresses": [
          "125.216.100.159"
        ],
        "user": "test",
        "date": "2021-12-24T04:48:33.827Z",
        "events": [
          {
            "category": "waf",
            "request_id": "128",
            "blocked": true,
            "confidence_level": "80",
            "date": "2021-12-24T04:48:33.827Z",
            "date_started": "2021-12-24T04:48:33.827Z",
            "type": "ssrf",
            "duration": "",
            "security_response": "",
            "request_path": "POST/login/"
          }
        ]
      }
    ],
    "workLoadId": "temp1"
  };
  
  
  var config = {
    method: 'post',
    url: 'https://api.dev.protectonce.com/heartbeat',
    headers: { 
        'Authorization': 'Basic YzNlZDM0MTYtMGU1My00Y2MzLTg3NmMtOWQ0MWU5NTAyMzI3OmMxMGFmZDFlLWVmYzktNGE2Yi04YWFmLTNmYmZkNmEwNzYwNA==' //staging
      
        //'Authorization': 'Basic ZTJiNzQ4MDQtY2EzNS00YTFkLWIyZjMtMDgwOTRiNGNlZGU0OjM5N2E2MmZmLWM1OTctNGJmMi04NjQzLWJhNjgzOTJjNTUwMQ=='
    },
    data : data
  };
  

async function makeApiCall(config) {
  for (let i = 0; i < 10; i++){
    let start = moment(new Date());
    console.log(`Start Request: ${start.format(" DD MMM YYYY HH:mm:ss:ms")}`)
    let response =await axios(config)
    .then(function (response) {
      console.log("resp",response.status);
    })
    .catch(function (error) {
      console.log("error",error);
    });
    let end = moment(new Date());
    console.log(`End Request: ${end.format(" DD MMM YYYY HH:mm:ss:ms")}`)
    console.log(`Total processing time: ${end-start} milliseconds`)
}
}

makeApiCall(config)
