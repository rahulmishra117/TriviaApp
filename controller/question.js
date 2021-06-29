const QUES=require('../models/question');

module.exports.create=function(req,res){
    try{
        QUES.create({
                    desc:req.body.desc,
                    option:req.body.option,
                    date:req.body.date,
                    time:req.body.time
                },
                function(err,newQuestion){
                    if(err){
                        console.log(err);
                        console.log('Error is found!!');
                        return ;
                    }
                    console.log('*******',newQuestion);
                    return res.redirect('back');
                })

    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"Wrong question",
            
        })
    }
}

module.exports.showquestion=function(req,res)
{
    try{
        QUES.find({},function(err,question){
                    if(err){
                        console.log(err);
                        console.log("Found Error in the Server");
                        return ;
                    }
                    return res.render('question',{
                        title:'Ansewer',
                        question_list:question
                    })
                })

    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"wrong value",
            err:e
        })
    }
}