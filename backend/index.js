const { Model } = require('objection');
const cors = require('cors');
const express = require('express');
const knex = require('knex');
const errorHandler = require('./src/errorHandler');



const app = express();
const port = process.env.PORT || 3000

//middlewares
app.use(express.json());
app.use(cors());

// Give the knex instance to objection.
const KnexConfig = require('./knexfile');
Model.knex(knex(KnexConfig.development));

//bring routes
const stops = require('./src/routes/stops/stops.routes');
const cities = require('./src/routes/cities/cities.routes');

app.use('/api/v1/stops', stops);
app.use('/api/v1/cities', cities);

app.use((error, req, res, next) => {
    errorHandler(error, res);
});


app.listen(port, () => console.log(`Example app listening on port port! ${port}`))




module.exports = app;