// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Movie = require("../models/Movie.model");

const Celebrity = require("../models/Celebrity.model");

router.get("/create",async (req,res,next)=>{
    try{
        const celebrities= await Celebrity.find({}).exec();
        res.render("/movies/new-movie",{
            cast:celebrities
        });
    }
    catch(ex){
        console.error(ex);
    }
});

router.post("/create",async (req,res,next)=>{
    {title,genre,plot,cast}= req.body;
    try{

    await Movie.create({
        title,genre,plot,cast
    }).exec();
    res.redirect("/movies");
    }
    catch(ex){
        res.render("/movies/new-movie");
    }
})

router.get("/movies",async (req,res,next)=>{
   try{

   const movies= await Movie.find({},{title:1,genre:1,plot:1}).exec();
   res.render("movies/movies",{
       movies:movies
   });
   }
   catch(ex){
conso.err(ex);
   }
})

router.get("/movies/:id", async(req,res,next)=>{
    const id=req.params.id;
    const movie= await Movie.findById(id).populate("cast").exec();
    res.render("movies/movie-details",{
        movie:movie
    })
})

module.exports = router;