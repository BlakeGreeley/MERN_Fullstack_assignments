const express = require('express')
const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());


app.listen(port, () => console.log(`Listening to the port: ${port}`));