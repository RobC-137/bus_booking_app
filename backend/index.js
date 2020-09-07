const { Model } = require('objection');
const express = require('express');

const knex = require('./knexfile');

const app = express();
const port = process.env.PORT || 3000

// Give the knex instance to objection.
Model.knex(knex);

//bring routes
const stops = require('./src/routes/stops/stops.routes');

app.use('/api/v1/stops', stops);

app.listen(port, () => console.log(`Example app listening on port port! ${port}`))