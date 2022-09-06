const express = require('express');
const app = express();
const path = require('path');
require('./src/database/config/db')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname,'./Public')));
app.set('puerto', process.env.PORT || 3001)
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Requiero la ruta de news
var newsRouter = require('./routes/news');

// Creo la ruta news
app.use('/api/news', newsRouter);


app.listen(app.get('puerto'), ()=>
console.log("http://localhost:"+ app.get('puerto')));