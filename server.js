// Importing app.js
const app = require('./app');

// Starting Sever and Port
const port = 8000;
app.listen(port, () => {
    console.log(`App Running on port: ${port}...`);

});