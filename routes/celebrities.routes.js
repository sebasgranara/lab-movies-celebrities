// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Celebrity = require("../models/Celebrity.model");

router.get("/",async (req,res,next)=>{
    try{

    const celebrities =await Celebrity.find({}).exec();
    res.render("celebrities/celebrities", {
        celebrities:celebrities
    });
    }
    catch(ex){
        console.error(ex);
    }
})

router.get("/create",(req,res,next)=>{
    res.render("celebrities/new-celebrity");
});

router.post("/create",async (req,res,next)=>{
    {name, occupation, catchPhrase}= req.body;
    try{
    await Celebrity.create({
        name,
        occupation,
        catchPhrase
    }).exec();
    res.redirect("/celebrities");
    }
    catch(ex){
        console.error(ex.message);
        res.render("celebrities/new-celebrity");
    }
});

// all your routes here

module.exports = router;