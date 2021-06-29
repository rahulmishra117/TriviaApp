// Router for accesing and post data form database to user.
const express=require('express');
const router=express.Router();

const questioncontroller=require('../controller/question');

console.log('Router is loaded');

router.get('/',questioncontroller.showquestion);

router.post('/create-question',questioncontroller.create);
module.exports=router;