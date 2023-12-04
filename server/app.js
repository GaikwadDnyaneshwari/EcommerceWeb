require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./db/conn");
const cookieParser = require('cookie-parser');
//const path = require("path");

const products = require("./models/productsSchema");

const DefaultData = require("./defaultdata");
const cors = require("cors");
const router = require("./routes/router");

app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
app.use(router);

const port =  8005;

//for static files

//app.use(express.static(path.join(__dirname, "./client/build" )));

//app.get("*", function(req,res){
   // res.sendFile(path.join(__dirname, "./client/build/index.html"))
//})

// if(process.env.NODE_ENV === "production"){
//     app.use(express.static("client/build"))
// }


app.listen(port, ()=>{
    console.log(`server is running on port number ${port}`);
});


DefaultData();