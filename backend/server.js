const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const receipesRoute = require('./Routes/receipes')
const app = express();
app.use(express.json())
app.use(morgan('dev'));

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("DB connected");
    app.listen(process.env.PORT,() => {
        console.log("App is running on PORT "+process.env.PORT);
    });
})
   


app.get('/',(req,res)=>{
    return res.json({
        "name" : "Kaung Sett Thu"
    })
})

app.use('/api/receipes',receipesRoute);
