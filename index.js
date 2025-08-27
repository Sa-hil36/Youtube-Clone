//require('dotenv').config({path:'./env'});
import express from "express";
import connectDB from "./src/db/index.js";
import dotenv from "dotenv";

dotenv.config({});
const PORT = process.env.PORT || 8000

connectDB()
.then(()=>{
  app.listen(PORT, ()=>{
    console.log(`Server is running at port : ${process.env.PORT}`);
  })
})
.catch((err)=>{
  console.log("MONGO db connection failed !!!", err);
})

