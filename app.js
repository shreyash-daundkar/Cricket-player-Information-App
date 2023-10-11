const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./util/database');
const playerRoute = require('./routes/player');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/players', playerRoute);

createServer();

async function createServer() {
    const seq = await sequelize.sync();
    app.listen(4000);
}
