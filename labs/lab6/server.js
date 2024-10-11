const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const notesApp = require('./routes/NoteRoutes');
const apiv1 = express();

const DB_URL = "mongodb://admin:admin@localhost:27017/comp3123?authSource=admin"
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
apiv1.use('/docs', notesApp);
app.use("/api/v1", apiv1);

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});