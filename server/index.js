import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import mongoose from "mongoose";

import useroute from "./routes/userroutes.js";

const app=express();

app.use(bodyparser.json({limit:"30mb",extended:true}));
app.use(bodyparser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/user',useroute);


const url="mongodb+srv://log:gotogo@cluster0.hwdac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT=process.env.PORT || 5000;

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
    .then(()=>app.listen(PORT,()=>console.log(`server run at ${PORT}`)))
    .catch((error)=>console.log(error));

mongoose.set('useFindAndModify',false);