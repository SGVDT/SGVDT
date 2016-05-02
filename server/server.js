const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');

const Crime = require(__dirname + '/models/crime');
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/crimes_db');


const crimeRouter = require(__dirname + '/routes/crime_router');


app.use('/api', crimeRouter);
app.listen(PORT, () => console.log('server up on ' + PORT));
