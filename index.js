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



app.get('/',function(request,response){
    QUES.find({},function(err,question){
        if(err){
            console.log(err);
            console.log("Found Error in the Server");
            return ;
        }
        return response.render('question',{
            title:'Ansewer',
            question_list:question
        })
    })
})
app.post('/create-question',function(request,response){
    QUES.create({
        desc:request.body.desc,
        option:request.body.option,
        date:request.body.date,
        time:request.body.time
    },
    function(err,newQuestion){
        if(err){
            console.log(err);
            console.log('Error is found!!');
            return ;
        }
        console.log('*******',newQuestion);
        return response.redirect('back');
    })
})
app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error in the port !!!",err);
    }
    console.log("Working fine at the Port number",port);
})