const path = require('path');
const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'My RESTful API',
        version: '1.0.0',
        description: 'API documentation for my RESTful API',
      },
      servers: [
        {
          url: `http://localhost:${process.env.PORT || 3000}`,
          description: 'Local server',
        },
        {
          url: `https://2ce5-110-169-223-210.ngrok-free.app`,
          description: 'NGROK server for public testing',
        },
        {
          url: `https://api.ecoborns.com`,
          description: 'Production server',
        },
        // Add more servers as needed
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
    apis: [path.join(__dirname, '../routes/*.js')], // Path to the API docs
  };
  module.exports = swaggerOptions;
