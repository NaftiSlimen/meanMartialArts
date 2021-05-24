const mongoose = require("mongoose");

const caracteristicsSchema=new mongoose.Schema({
    "description":String,
    "selfDefenseEfficiency":{
        type: Number,
        min: 1,
        max: 10,
    },
    "dangerOnOpponent":{
        type: Number,
        min: 1,
        max: 10,
    },
    "weapons":{
        type: String,
        enum: ['with', 'without'],
        "default":"without"
    }
});
const hallOfFameSchema=new mongoose.Schema({
    "fullName":String,
    "countryOfOrigin":String,
    "trophies":[String],
});
const martialArtSchema=new mongoose.Schema({
    "name":String,
    "origin":String,
    "inventionDate":Number,
    "caracteristics":caracteristicsSchema,
    "hallOfFame":[hallOfFameSchema]

});

mongoose.model("martialArts", martialArtSchema, "marts");