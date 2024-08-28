const express = require("express");
const urlroute = require("./routes/url")
const {connecttomongodb} = require("./connect")

const app = express();
const PORT = 8001;

connecttomongodb("mongodb://localhost:27017/short-url").then(()=>{console.log("mongodb connected")});
app.use(express.json())
app.use("/url" , urlroute)


app.listen(PORT , ()=>{console.log(`Server Started at PORT :${PORT}`)});