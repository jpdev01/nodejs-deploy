const express = require('express');

const app = express();

app.get('/', (req, resp) => resp.send("hello world!"));

app.listen(3000);
