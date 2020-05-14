//1) MODULES
const fs = require('fs');
const express = require('express');
const morgan = require('morgan');


//3) IMPORT ROUTES
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

//2) Calling Express
const app = express();

//4) MIDDLEWARES: Function modify incoming data
// MORGAN
app.use(morgan('dev')); //Require on code -  output: GET /api/v1/tours 200 3.096 ms - 8759
app.use(express.json());

app.use((req, res, next) => {
    console.log('Hello From the middleware 🛸');
    next();
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})

//5) MOUNTING ROUTER
app.use('/api/v1/tours', tourRouter); //This a real middleware
app.use('/api/v1/users', userRouter);





//2) Export
module.exports = app;