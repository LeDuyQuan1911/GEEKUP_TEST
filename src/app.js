const express = require('express');
const path = require('path');
require("dotenv").config();
const apiRoutes = require('./routes/api');
const db = require('./config/db');
const { sequelize } = require('./model');


const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME || 'localhost';
const app = express();

//config express file upload
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config router
apiRoutes(app);

//connect database
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to MySQL via XAMPP');
    app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});
  } catch (error) {
    console.error('Connection error:', error);
  }
})();