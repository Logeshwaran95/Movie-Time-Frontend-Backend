const MovieModel = require("./database/movies");
const UserModel = require("./database/users");
var mongoose = require('mongoose');
const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());


//Set up default mongoose connection
var mongoDB = 'mongodb+srv://logesh:hsegol@mycluster1.tyoay.mongodb.net/DisneyPlusHotstar?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("CONNECTION ESTABLISHED"));
//home
app.get("/",async (req,res) => {
    return res.json("Movie Time backend by Logeshwaran");
})
//get latest trending movies
app.get("/movies/latest",async (req,res) => {
    const movies = await MovieModel.find();
    return res.json(movies);
})
//get crime packed movies
app.get("/movies/crime",async (req,res)=> {
    const {id} = req.params;
    const getMovie = await MovieModel.find({"genre" :"crime"});
    return res.json(getMovie);
});
//get romance packed movies
app.get("/movies/romance",async (req,res)=> {
    const {id} = req.params;
    const getMovie = await MovieModel.find({"genre" :"romance"});
    return res.json(getMovie);
});
//get action packed movies
app.get("/movies/action",async (req,res)=> {
    const {id} = req.params;
    const getMovie = await MovieModel.find({"genre" :"action"});
    return res.json(getMovie);
});
//get superhero movies
app.get("/movies/superheroes",async (req,res)=> {
    const {id} = req.params;
    const getMovie = await MovieModel.find({"genre" :"superheroes"});
    return res.json(getMovie);
});
//get horror movies
app.get("/movies/horror",async (req,res)=> {
    const {id} = req.params;
    const getMovie = await MovieModel.find({"genre" :"horror"});
    return res.json(getMovie);
});
//get particular movie
app.get("/movies/:id",async (req,res)=> {
    const {id} = req.params;
    const getMovie = await MovieModel.find({_id :id});
    return res.json(getMovie);
});
//get searched movie
app.get("/movies/search/:title",async (req,res)=> {
    const {title} = req.params;
    const getMovie = await MovieModel.find({title :{ "$regex": title}});
    if(getMovie.length===0) {
        return res.json({"error": `No MOVIE found for the title of ${title}`});
    }
    return res.json(getMovie);
});
//login
app.post("/user-login",async(req,res) => {
    const addNewUser = await UserModel.create(req.body);
    return res.json({userAdded : addNewUser,message:"Logged In Succesfully"});
});
app.listen(process.env.PORT || 5000, () => {
    console.log("EXPRESS IS RUNNING!!");
});