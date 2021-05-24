const mongoose = require("mongoose");
const madb = mongoose.model("martialArts");

const addCaracteristic = function (req, res) {
    const maId = req.params.maID;
    madb.findById(maId).exec(function (err, mart) {
        const response = { status: 204 };
        if (err) {
            response.status = 500;
            response.message = err;
        }
        else if (!mart) {
            response.status = 404;
            response.message = { "message": "Martial art not found" };
        }
        if (response.status != 204) { res.status(response.status).json(response.message); }
        else {
            console.log("adding");
            if (req.body.description && req.body.selfDefenseEfficiency&& req.body.dangerOnOpponent&& req.body.weapons) {

                mart.caracteristics = {};
                console.log("before" + mart.caracteristics);
                mart.caracteristics = { "description": req.body.description,
                                        "selfDefenseEfficiency": req.body.selfDefenseEfficiency , 
                                        "dangerOnOpponent": req.body.dangerOnOpponent, "weapons": req.body.weapons};
                console.log("after "+mart.caracteristics);
            }
            mart.save(function (err, updatedmart) {
                if (err) {
                    response.status = 500;
                    response.message = err;
                }
                res.status(response.status).json(response.message);


            });
        }
    });
}


const deleteCaracteristic = function (req, res) {
    const maId = req.params.maID;
    const response = { status: 200 };
    madb.findById(maId).exec(function (err, mart) {
        if (err) {
            response.status = 500;
            response.message = err;
        } else {
            if (!mart) {
                response.status = 404;
                response.message = { "message": "Martial art not found" };
            } else {
                mart.caracteristics.remove();
                mart.save(function (err, updatedMart) {
                    if (err) {
                        response.status = 500;
                        response.message = err;
                    }
                    else {
                        response.status = 200;
                        response.message = { "message": "caracteristics deleted" };
                    }
                })

            }

        }
        res.status(response.status).json(response.message);
    });
}


const showAllCaracteristics = function (req, res) {
    const maId = req.params.maID;
    const response = { status: 200 }
  
    madb.findById(maId).exec(function (err, mart) {
        if (err) {
            response.status = 500;
            response.message = err;
        } else {
            if (!mart) {
                response.status = 404;
                response.message = { "message": "Martial art not found" };
            } else {
                response.message = mart.caracteristics;
                console.log(mart.caracteristics);
            }

        }
        res.status(response.status).json(response.message);
    });
}

const partiallyUpdateCaracteristic = function (req, res) {
    const maId = req.params.maID;
    const response = { status: 200 }

    madb.findById(maId).exec(function (err, mart) {
        
        if (err) {
            response.status = 500;
            response.message = err;
        }
        else if (!mart) {
            response.status = 404;
            response.message = { "message": "Martial art not found" };
        }
        if (response.status != 204) { res.status(response.status).json(response.message); }
        else {
            if (req.body.description || req.body.selfDefenseEfficiency|| req.body.dangerOnOpponent|| req.body.weapons) {
                if (req.body.description) mart.caracteristics.description =req.body.description;
                if (req.body.selfDefenseEfficiency) mart.caracteristics.selfDefenseEfficiency =req.body.selfDefenseEfficiency;
                if (req.body.dangerOnOpponent) mart.caracteristics.dangerOnOpponent =req.body.dangerOnOpponent;
                if (req.body.weapons) mart.caracteristics.weapons =req.body.weapons;
            }
            mart.save(function (err, updatedmart) {
                if (err) {
                    response.status = 500;
                    response.message = err;
                }
                res.status(response.status).json(response.message);


            });
        }
    });

}

const fullyUpdateCaracteristic = function (req, res) {
    const maId = req.params.maID;
    const response = { status: 200 }

    madb.findById(maId).exec(function (err, mart) {
        
        if (err) {
            response.status = 500;
            response.message = err;
        }
        else if (!mart) {
            response.status = 404;
            response.message = { "message": "Martial art not found" };
        }
        if (response.status != 204) { res.status(response.status).json(response.message); }
        else {
            if (req.body.description && req.body.selfDefenseEfficiency&& req.body.dangerOnOpponent&& req.body.weapons) {
                mart.caracteristics.description =req.body.description;
                mart.caracteristics.selfDefenseEfficiency =req.body.selfDefenseEfficiency;
                mart.caracteristics.dangerOnOpponent =req.body.dangerOnOpponent;
                mart.caracteristics.weapons =req.body.weapons;
            }
            mart.save(function (err, updatedmart) {
                if (err) {
                    response.status = 500;
                    response.message = err;
                }
                res.status(response.status).json(response.message);


            });
        }
    });

}

module.exports = {
    addCaracteristic: addCaracteristic,
    deleteCaracteristic: deleteCaracteristic,
    showAllCaracteristics: showAllCaracteristics,
    partiallyUpdateCaracteristic: partiallyUpdateCaracteristic,
    fullyUpdateCaracteristic: fullyUpdateCaracteristic
}