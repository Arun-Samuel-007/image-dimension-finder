const express = require('express');
const app = express();
const port = process.env.PORT || 7000;
const morgan = require('morgan')('dev');

app.use(morgan);

app.use('/testapi',(req,res)=>{
    console.log('Test api works...');
    res.status(200).json('Welcome to Image app created by ARUN SAMUEL');
});

app.listen(port, ()=>{
    console.log(`App running on PORT ${port}`);
});
