const mongoose = require("mongoose");
const madb = mongoose.model("martialArts");

const showAll = function (req, res) {
    const response = {
        status: 200,
    };
    var offset = 0;
    var count = 25;
    if (req.query.offset && req.query.count) {
        offset = parseInt(req.query.offset);
        count = parseInt(req.query.count);
    }
    madb.find().skip(offset).limit(count).exec(function (err, marts) {
        if (err) {
            response.status = 500;
            response.message = err;
        } else { response.message = marts; }
        res.status(response.status).json(response.message);
    }
    );
}

const showOne = function (req, res) {
    const response = {
        status: 200,
    };
    const maId = req.params.maID;
    madb.findById(maId).exec(function (err, mart) {
        if (err) {
            response.status = 500;
            response.message = err;
        } else if (!mart) {
            response.status = 400;
            response.message = { "message": "Martial art not found" };
        }
        else { response.message = marts; }
        res.status(response.status).json(response.message);
    }
    );
}

const removeMartialArt = function (req, res) {
    const maId = req.params.maID;
    const response = {
        status: 200,
        message: "deleted mart with ID " + maId
    };

    madb.findByIdAndDelete(maId).exec(function (err, deletedMart) {
        if (err) {
            response.status = 500;
            response.message = err;
        } else if (!deletedMart) {
            response.status = 400;
            response.message = { "message": "martial Art not found" };
        }
        res.status(response.status).json(response.message);
    }
    );
}

const addMartialArt = function (req, res) {
    const response = {
        status: 200,
        message: "martial art added"
    };
    madb.create({
        "name": req.body.name,
        "origin": req.body.origin,
        "inventionDate": req.body.inventionDate,
        "caracteristics": req.body.caracteristics,
        "hallOfFame": req.body.hallOfFame
    }, function (err, createdMartialArt) {
        if (err) {
            response.status = 400;
            response.message = err;
        } else {
            response.status = 201;
            response.message = { "message": "martialArt created" };
        }
    });
    res.status(response.status).json(response.message);
}

const fullyUpdateMartialArt=function(req,res){
    const response = {
        status: 200,
    };
    const maId = req.params.maID;
    madb.findById(maId).exec(function (err, mart) {
        if (err) {
            response.status = 500;
            response.message = err;
        } else if (!mart) {
            response.status = 400;
            response.message = { "message": "Martial art not found" };
        }
        else { 
            if (req.body.name&&req.body.origin&&req.body.inventionDate&&req.body.caracteristics&&req.body.hallOfFame){
                mart.name=req.body.name;
                mart.origin=req.body.origin;
                mart.inventionDate=req.body.inventionDate;
                mart.caracteristics=req.body.caracteristics;
                mart.hallOfFame=req.body.hallOfFame;
            }
            mart.save(function(err,updatedMart){
                if (err) {
                    response.status = 500;
                    response.message = err;
                }
                response.message = { "message": "Martial art fully updated" };
            });

         }
        res.status(response.status).json(response.message);
    }
    );


}

const partiallyUpdateMartialArt=function(req,res){
    const response = {
        status: 200,
    };
    const maId = req.params.maID;
    madb.findById(maId).exec(function (err, mart) {
        if (err) {
            response.status = 500;
            response.message = err;
        } else if (!mart) {
            response.status = 400;
            response.message = { "message": "Martial art not found" };
        }
        else { 
            if (req.body.name||req.body.origin||req.body.inventionDate||req.body.caracteristics||req.body.hallOfFame){
                if (req.body.name) mart.name=req.body.name;
                if (req.body.origin) mart.origin=req.body.origin;
                if (req.body.inventionDate) mart.inventionDate=req.body.inventionDate;
                if (req.body.caracteristics) mart.caracteristics=req.body.caracteristics;
                if (req.body.hallOfFame) mart.hallOfFame=req.body.hallOfFame;
            }
            mart.save(function(err,updatedMart){
                if (err) {
                    response.status = 500;
                    response.message = err;
                }
                response.message = { "message": "Martial art partially updated" };
            });

         }
        res.status(response.status).json(response.message);
    }
    );
}


module.exports = {
    showAll: showAll,
    showOne: showOne,
    addMartialArt: addMartialArt,
    removeMartialArt: removeMartialArt,
    partiallyUpdateMartialArt:partiallyUpdateMartialArt,
    fullyUpdateMartialArt:fullyUpdateMartialArt
}