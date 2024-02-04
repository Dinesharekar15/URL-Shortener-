const express=require("express");
const route=require('./router');
const {connect}=require('./connect')
const app=express();
const PORT=7001;
app.use('/',route)

connect('mongodb://localhost:27017/dinesh')
.then(()=>console.log("connected mongoDb"))
app.listen(PORT,()=>{console.log(`server runing in port ${PORT}`)})