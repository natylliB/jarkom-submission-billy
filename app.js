'use strict'

const express = require('express')

const PORT = 8000
const HOST = process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost';

const app = express()
/*
[ROUTE] '/'
[Response] => Hello world!
 */
app.get('/', (req, res) => {
    res.send('Hello world!\n')
});

/*
Optional [ROUTE] '/me'
[Response] => Dicoding username.
*/
app.get('/me', (req, res) => {
  res.send('dreamingpotato');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
