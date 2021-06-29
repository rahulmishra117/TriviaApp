// Database connection two my localsystem database
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/trivapp');

const db=mongoose.connection;
db.on('error',console.error.bind(console,'error is find'));

db.once('open',function(){
    console.log('Successfully connected to the database');
});