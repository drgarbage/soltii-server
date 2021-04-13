const express = require('express');
const bodyParser = require('body-parser');

const DIST = {
  // "ILMIW-RRTSW-EYPCI-WYYBR": { customer: "野村台南店", numberOfClients: 10 },
  // "IWCLG-TSNED-HTCKS-LHHM": { customer: "野村台南店", numberOfClients: 10 },
  // "LZABP-NVOQN-TBGRK-JQUQX": { customer: "野村台南店", numberOfClients: 10 }
  "LZABP-NVOQN-TBGRK-JQUQX": { serialNumber: "LZABP-NVOQN-TBGRK-JQUQX", customer: "野村嘉義", numberOfClients: 15 },
  "ILMIW-RRTSW-EYPCI-WYYBR": { serialNumber: "ILMIW-RRTSW-EYPCI-WYYBR", customer: "野村台南店 2", numberOfClients: 10 },
  "IWCLG-TSNED-HTCKS-LHHME": { serialNumber: "IWCLG-TSNED-HTCKS-LHHME", customer: "野村台南店 3", numberOfClients: 10 },
  "JCOOR-SKFTN-GPEOQ-AQEYL": { serialNumber: "JCOOR-SKFTN-GPEOQ-AQEYL", customer: "野村岡山", numberOfClients: 15 },
  "JXRTA-LYJTM-DGZXB-FXJXV": { serialNumber: "JXRTA-LYJTM-DGZXB-FXJXV", customer: "野村永康", numberOfClients: 15 },
  "JFWQG-ULYAI-NBACX-KSYQX": { serialNumber: "JXRTA-LYJTM-DGZXB-FXJXV", customer: "野村高雄中山", numberOfClients: 15 },
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
