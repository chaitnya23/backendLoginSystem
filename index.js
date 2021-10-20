const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const router = require('./router');


//database connection
require('../database/connection');


//setting view engine
const view_path = path.join(__dirname ,'../frontend/views');
app.set('view engine' ,'hbs');
app.set('views' ,view_path);
hbs.registerPartials(path.join(__dirname ,'../frontend/partials'))


//encoding server data
app.use(express.urlencoded({extended:false}))

//setting public path to express
app.use(express.static(path.join(__dirname ,'../public')));

//using router
app.use(router);
 
 
//listening to a server
app.listen(8000 ,()=>{
    console.log("listning at port 8000");
})
