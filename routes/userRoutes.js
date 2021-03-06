// ) MODULES
const express = require('express');

// ) IMPORTING
const userController = require('./../controllers/userController');

// ) ROUTES 
const userRouter = express.Router()

userRouter
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);

userRouter
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);


// ) EXPORT
module.exports = userRouter;