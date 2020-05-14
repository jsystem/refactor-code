const fs = require('fs');

// ) READ FILE
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);


// ) ROUTE HANDLERS
//GET -All Tours
exports.getAllTours = (req, res) => {
    console.log(req.requestTime);
    //status codes every single response

    res.status(200).json({
        status: 'success',
        requesteAt: req.requestTime,
        results: tours.length,// Sending multiple objects // Count How many JSON Existe 
        data: {
            tours
        }
    });
};


//GET - Handler by ID Single Tour
exports.getTour = (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1;

    if (id > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }

    const tour = tours.find(el => el.id === id);

    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    });
};


// POST - to Create new tour!
exports.createTour = (req, res) => {
    // console.log(req.body);

    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/../dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'success',
            data: {
                tours: newTour
            }
        }) //Created New Resource on the server

    }) //If pass across callback use this but the writeFileSync Blocking

    // res.send('Done');
}

//PATCH - Update 
exports.updateTour = (req, res) => {

    // Validate IF Correct ID
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }

    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here...>'
        }
    });
}


//DELETE Handler - DELETE ENTIRE OBJECT
exports.deleteTour = (req, res) => {
    // Validate IF Correct ID
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    // This outpur is in the real WORLD
    res.status(204).json({
        status: 'success',
        data: null
    });
}




