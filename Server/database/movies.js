const mongoose = require("mongoose");

//create Movie schema
const MovieSchema = mongoose.Schema({
    id: Number,
    title: String,
    runtime: String,
    year: Number,
    release:String,
    genre: String,
    certificate: String,
    plot:String,
    trailerlink:String,
    image:String,
});

const MovieModel = mongoose.model("movies", MovieSchema);

module.exports = MovieModel;