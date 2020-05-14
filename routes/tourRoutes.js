// ) MODULES
const express = require('express');
const fs = require('fs');

// IMPORTING
const tourController = require('./../controllers/tourController');

// ) ROUTES 
const router = express.Router();

router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.createTour);

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

// ) EXPORT
module.exports = router;