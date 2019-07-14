const http = require('http');
const express = require('express');
const license = require('./lib/license');
const PORT = process.env.PORT || 5000;

const app = new express();
app.get('/', (req, rep) => {
  rep.send('Server Running.');
})
app.use('/license', license);

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});

