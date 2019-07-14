const express = require('express');
const bodyParser = require('body-parser');

const license = new express();
license
  .use(bodyParser.json())
  .get('/', (req, rep) => {
    rep.send('License function available.');
  })
  .all('/registLicense', (req, rep) => {
    let distribution = {
      LicenseDetail: {
        numberOfClients: 5
      }
    };

    let reply = {
      Status: true,
      Message: null,
      Result: distribution
    }
    rep.header('Content-Type', 'application/json');
    rep.json(reply);
  });

module.exports = license;