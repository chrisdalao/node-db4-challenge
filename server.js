const express = require('express');
const helmet = require('helmet');

// const db = require('./data/db-config.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h1> Hello World! </h1>`)
})

module.exports = server;