const shortID = require("shortid")
const URLdb = require("../models/url");


async function handlegenerateshorturl(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({ status : "url is required"})
    const shortId = shortID();
    await URLdb.create({
        shortid:shortId,
        redirecturl: body.url,
        visitedhistory: []
    })
    return res.json({ id : shortId})

}

async function handlegetanalytical(req,res) {
    const shortid = req.params.shortid;
    const result = await URLdb.findOne({ shortid })
    return res.json({ totalclicks : result.visithistory.length , analytics :result.visithistory})
}

module.exports = {
    handlegenerateshorturl,
    handlegetanalytical

}