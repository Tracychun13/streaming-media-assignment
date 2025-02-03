const fs = require('fs'); // pull in the file system module

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const client2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const client3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const getIndex = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(index);
  res.end();
};

const getClient2 = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(client2);
  res.end();
};

const getClient3 = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(client3);
  res.end();
};
module.exports = {
  getIndex,
  getClient2,
  getClient3,
};
