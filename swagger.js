const swagger = require('swagger-autogen')();// Import the swagger-autogen library

const doc = {
    info: {
        title: 'CSE 341 Project 2 API',
        description: 'API for CSE 341 Project 2'
    },
    host: 'localhost:3000',
    schemes: ['http', 'https']
};

const outputFile = './swagger.json'; // Output file for the generated Swagger documentation
const endpointFiles = ['./routes/index.js']; // Files containing the API endpoints to be documented

swagger(outputFile, endpointFiles, doc); // Generate the Swagger documentation