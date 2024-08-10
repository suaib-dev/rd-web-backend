const express = require('express');
const route = require('./routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors()); // Allow all origins
app.use(route);


app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
});
