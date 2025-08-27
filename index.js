//require('dotenv').config({path:'./env'});
import express from "express";
import connectDB from "./src/db/index.js";
import dotenv from "dotenv";

dotenv.config({});

connectDB();

