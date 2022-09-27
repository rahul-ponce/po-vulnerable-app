# dummy-test-waf
## Start server

```sh
$ cd dummy-test-waf
$ npm install 
$ node app.js
```
It will be running on port 4300

## How to run gotestwaf
```sh
$ docker pull wallarm/gotestwaf
$ docker run -v ${PWD}:/app/reports --network="host" wallarm/gotestwaf --url=http://localhost:4300 --blockStatusCode=500 --verbose --skipWAFBlockCheck 
```

## gotestwaf github
https://github.com/wallarm/gotestwaf
