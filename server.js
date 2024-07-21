const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');
const router = require('./router')

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://sandaru:simplemern1@cluster0.mf7ocfd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connect = async () =>{
    try{
        await mongoose.connect(uri);
        console.log("connected to MongoDB");
    }
    catch(e){
        console.log("MongoDB error", e);
    }
}

connect();

const server = app.listen(3001, '127.0.0.1', ()=>{
    console.log("node server is listerning to ${server.address().port}")
});

app.use('/api', router);