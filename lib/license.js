const express = require('express');
const bodyParser = require('body-parser');

const DIST = {
  "ILMIW-RRTSW-EYPCI-WYYBR": { customer: "野村台南店", numberOfClients: 10 },
  "IWCLG-TSNED-HTCKS-LHHM": { customer: "野村台南店", numberOfClients: 10 },
  "LZABP-NVOQN-TBGRK-JQUQX": { customer: "野村台南店", numberOfClients: 10 }
};

const license = new express();
license
  .use(bodyParser.json())
  .get('/', (req, rep) => {
    rep.send('License function available.');
  })
  .all('/registLicense', (req, rep) => {
    let { serialNumber } = req.body;
    let distribution = {
      LicenseDetail: {
        numberOfClients: 5
      }
    };

    if (serialNumber in DIST) {
      distribution.LicenseDetail = DIST[serialNumber];
    }

    let reply = {
      Status: true,
      Message: null,
      Result: distribution
    }
    rep.header('Content-Type', 'application/json');
    rep.json(reply);
  });

module.exports = license;