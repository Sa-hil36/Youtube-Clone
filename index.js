//require('dotenv').config({path:'./env'});
import express from "express";
import connectDB from "./src/db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({});


connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running at port : ${process.env.PORT}`);
  })
})
.catch((err)=>{
  console.log("MONGO db connection failed !!!", err);
})

