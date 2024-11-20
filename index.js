const express = require('express');
const { readdirSync } = require('fs');
const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')
const app = express();

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({limit:"10mb"}))

const getnews = require('./routes/news')

const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const swaggerOptions = require('./config/swaggerOption')
const specs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

app.use('/api/news',getnews)

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to my RESTful API with MySQL and Sequelize!');
  });

  const db = require('./models');

db.sequelize.sync({ alter: true }).then(() => {
    app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(err => console.log('Failed to sync database:', err));

// app.listen(5000,()=> console.log('server running'))