const express = require("express");
const urlroute = require("./routes/url");
const URLdb = require("./models/url")
const {connecttomongodb} = require("./connect");
const path = require("path");
const homeroute = require("./routes/staticrouter")

const app = express();
const PORT = 8001;

connecttomongodb("mongodb://localhost:27017/short-url").then(()=>{console.log("mongodb connected")});

app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views")) 

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get("/" , homeroute)

app.use("/url" , urlroute)

app.get("/:shortid", async (req, res) => {
    const shortid = req.params.shortid;
    const entry = await URLdb.findOneAndUpdate(
        { shortid },
        { $push: { visithistory: { timestamp: Date.now() } } }
    );

    if (entry) {
        res.redirect(entry.redirecturl);
    } else {
        res.status(404).send("URL not found");
    }
});

app.use("/analytics/:shortid" , urlroute)

app.listen(PORT , ()=>{console.log(`Server Started at PORT :${PORT}`)});