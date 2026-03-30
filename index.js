require('dotenv').config();

const dns = require('dns');
dns.setServers(["1.1.1.1","8.8.8.8"]);

const express = require("express");
const cors = require("cors");


const connectDB = require('./config/db');
const patientRouter = require('./routes/patientRouter');

const app = express();

//middleware
app.use(cors());
app.use(express.json());

// call the function
connectDB()

//routes
app.use("/api",patientRouter);


//server start
app.listen(process.env.Port, () => {
  console.log("Server running ");
});
