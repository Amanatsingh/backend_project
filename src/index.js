// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
});


connectDB();





/*
import express from 'express';
const app = express();
// IIFE
//database connection
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}                
            `)
        app.on("error", (error) => {                             //listeners : error handling for database connection
            console.log("ERR:",error)
            throw error
        })

        app.listen(process.env.PORT, () => {             //server listening
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR",error)
        throw error
    }

})()  

*/