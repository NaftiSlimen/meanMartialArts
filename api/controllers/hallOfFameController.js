const mongoose = require("mongoose");
const madb = mongoose.model("martialArts");


const showOneByID=function(req,res){
console.log("showOneByID");
}

const showAll=function(req,res){
    console.log("showAll");
}

const deleteOne=function(req,res){
    console.log("deleteOne");
}

const addOne=function(req,res){
    console.log("addOne");
}

const partiallyUpdate=function(req,res){
    console.log("partiallyUpdate");
}

const fullyUpdate=function(req,res){
    console.log("fullyUpdate");
}





module.exports={
    showOneByID:showOneByID,
    showAll:showAll,
    deleteOne:deleteOne,
    addOne:addOne,
    partiallyUpdate:partiallyUpdate,
    fullyUpdate:fullyUpdate
}