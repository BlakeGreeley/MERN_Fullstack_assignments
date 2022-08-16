const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors());
app.listen(port, () => (`Listening to port: ${port}`));
