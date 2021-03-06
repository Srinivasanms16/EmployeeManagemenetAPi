require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./db/connect");
const emp = require("./router/employeerouter");

const server = express();

const port = process.env.PORT || 3000;

server.use(express.json());

server.use(express.urlencoded({extended:false}));

server.use(cors());

server.get("/test",(req,res)=>{
    res.send("testing....")
})

server.use("/emp",emp)

server.use((err,req,res,next)=>{
    res.status(500).send(err);
})

server.listen(port,()=>{
    console.log(`server is listing in port ${port}.....`)
})