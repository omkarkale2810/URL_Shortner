const shortid = require("shortid")
const URLdb = require("../models/url");

async function handlegenerateshorturl(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({ status : "url is required"})
    const shortId = shortid();
    await URLdb.create({
        shortid:shortId,
        redirecturl: body.url,
        visitedhistory: []
    })
    return res.json({ id : shortId})

}

module.exports = {
    handlegenerateshorturl,

}