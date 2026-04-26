const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const receipesRoute = require('./Routes/receipes')
const app = express();
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    return res.json({
        "name" : "Kaung Sett Thu"
    })
})

app.use('/api/receipes',receipesRoute);
app.listen(process.env.PORT,() => {
    console.log("App is running on PORT "+process.env.PORT);
})