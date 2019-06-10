const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/dist')));


app.listen(port, console.log(`listening on port ${port}`));
