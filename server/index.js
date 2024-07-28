const express = require("express");
const path= require("path")
const app =express();
const cors = require('cors');


const queryRoutes = require("./routes/queryRoutes");
const reviewRoutes = require("./routes/reviewRoutes")


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/api/queries', queryRoutes);
app.use('/api/review', reviewRoutes);

const{connectMongoDB}= require('./connect')
connectMongoDB('mongodb+srv://Aaditya:admin@cluster0.kxn151h.mongodb.net/D1')

app.listen(3000)
