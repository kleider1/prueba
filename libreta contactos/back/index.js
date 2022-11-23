const express = require('express');
const bodyPasser = require('body-parser');
const cors = require('cors')


const apiRouter = require('./routes/api');

const app = express();

require('./db');

app.use(cors());


app.use(bodyPasser.json());
app.use(bodyPasser.urlencoded({extended: true}));

app.use('/api', apiRouter);

  

app.listen(3000,()=>{
        console.log('Server start');
    });