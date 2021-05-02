import express from "express";

import {signin,signup} from "../controller/user.js";

const useroute=express.Router();

useroute.post("/signup",signup);
useroute.post("/signin",signin);

export default useroute;