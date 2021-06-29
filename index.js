const express=require('express');
const port= 9000;
const path=require('path');
const bodyparser=require('body-parser');

const db=require('./config/mongoose');
const QUES=require('./models/question');

const app=express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('assests'));
app.use(express.urlencoded());





app.use('/',require('./routes'));
app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error in the port !!!",err);
    }
    console.log("Working fine at the Port number",port);
})