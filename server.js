const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname+"/angular/dist/angular")));
// app.set('views', path.join(__dirname+'/client/views'));
// app.set('view engine', 'ejs');

