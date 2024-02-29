require('dotenv').configDotenv();
const express = require('express');


const app = express();


app.listen(process.env.PORT , () =>{
    console.log(`server is listening on ${process.env.PORT}`);
})