const express = require('express');
const app = express();
const port = 8000;
app.use(cors()) //newest update
require('./routes/person.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));