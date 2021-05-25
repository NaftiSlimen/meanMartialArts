const mongoose = require("mongoose");
const madb = mongoose.model("martialArts");




const addOne = function (req, res) {
    let maId = req.params.maID;
    let hofId = req.params.hofID;
    let response = { status: 200 };
    if (req.body.description) {
        madb.findById(maId).exec(function (err, mart) {
            if (err) {
                response.status(500);
                response.message = err;
            } else {
                if (req.body.description) {


                    mart.hallOfFame.id(hofId).trophies.push({ "description": req.body.description });

                    mart.save(function (err, updateMart) {
                        if (err) {
                            response.status = 500;
                            response.message = err;
                            console.log("err");
                        }
                        else {
                            response.status = 200;
                            response.message = { "message": "hall of fame deleted" };
                        }
                    })
                } else {
                    response.status = 404;
                    response.message = { "message": "hall of fame not found" };
                }
            }
        });

    } else {
        response.status = 400;
        response.message = { "message": "error adding trophy" };
    }
    res.status(response.status).json(response.message);
}

const showAll = function (req, res) {
    let response = { status: 200 };
    let maId = req.params.maID;
    let hofId = req.params.hofID;
    let count = 5;
    let offset = 0;
    if (req.query.offset && req.query.count) {
        count = parseInt(req.query.offset);
        offset = parseInt(eq.query.count);
    }
    madb.findById(maId).skip(offset).limit(count).exec(function (err, mart) {
        if (err) {
            response.status = 500;
            response.message = err;
        } else {
            response.message = mart.hallOfFame.id(hofId).trophies;
        }
        res.status(response.status).json(response.message);
    });
}

const showOneByID = function (req, res) {
    let response = { status: 200 };
    let maId = req.params.maID;
    let hofId = req.params.hofID;
    let trophiesId = req.params.trophiesID;
    let count = 5;
    let offset = 0;
    if (req.query.offset && req.query.count) {
        count = parseInt(req.query.offset);
        offset = parseInt(eq.query.count);
    }
    madb.findById(maId).skip(offset).limit(count).exec(function (err, mart) {
        if (err) {
            response.status = 500;
            response.message = err;
        } else {
            if (mart.hallOfFame.id(hofId)) {
                if (mart.hallOfFame.id(hofId).trophies.id(trophiesId)) {
                    response.message = mart.hallOfFame.id(hofId).trophies.id(trophiesId);
                } else {
                    response.status = 404;
                    response.message = { "message": "trophy not found" };
                }

            } else {
                response.status = 404;
                response.message = { "message": "hall of fame not found" };
            }
        }
        res.status(response.status).json(response.message);
    });
}

const deleteOne = function (req, res) {
    let response = { status: 200 };
    let maId = req.params.maID;
    let hofId = req.params.hofID;
    let trophiesId = req.params.trophiesID;
    let count = 5;
    let offset = 0;
    if (req.query.offset && req.query.count) {
        count = parseInt(req.query.offset);
        offset = parseInt(eq.query.count);
    }
    madb.findById(maId).skip(offset).limit(count).exec(function (err, mart) {
        if (err) {
            response.status = 500;
            response.message = err;
        } else {
            if (mart.hallOfFame.id(hofId)) {
                if (mart.hallOfFame.id(hofId).trophies.id(trophiesId)) {
                    mart.hallOfFame.id(hofId).trophies.id(trophiesId).remove();
                    response.message = { "message": "trophy deleted" };
                    mart.save(function (err, updateMart) {
                        if (err) {
                            response.status = 500;
                            response.message = err;
                        }
                        else {
                            response.status = 200;
                            response.message = { "message": "trophy deleted" };
                        }
                    })
                } else {
                    response.status = 404;
                    response.message = { "message": "trophy not found" };
                }

            } else {
                response.status = 404;
                response.message = { "message": "hall of fame not found" };
            }
        }
        res.status(response.status).json(response.message);
    });
}

const fullyUpdate = function (req, res) {
    let response = { status: 200 };
    let maId = req.params.maID;
    let hofId = req.params.hofID;
    let trophiesId = req.params.trophiesID;
    let count = 5;
    let offset = 0;
    if (req.query.offset && req.query.count) {
        count = parseInt(req.query.offset);
        offset = parseInt(eq.query.count);
    }
    madb.findById(maId).skip(offset).limit(count).exec(function (err, mart) {
        if (err) {
            response.status = 500;
            response.message = err;
        } else {
            if (mart.hallOfFame.id(hofId)) {
                if (mart.hallOfFame.id(hofId).trophies.id(trophiesId)) {
                    if (req.body.description)
                        mart.hallOfFame.id(hofId).trophies.id(trophiesId).description = req.body.description;
                    mart.save(function (err, updateMart) {
                        if (err) {
                            response.status = 500;
                            response.message = err;
                        }
                        else {
                            response.status = 200;
                            response.message = { "message": "hall of fame deleted" };
                        }
                    })
                } else {
                    response.status = 404;
                    response.message = { "message": "trophy not found" };
                }

            } else {
                response.status = 404;
                response.message = { "message": "hall of fame not found" };
            }
        }
        res.status(response.status).json(response.message);
    });
}


const partiallyUpdate = function (req, res) {
    let response = { status: 200 };
    let maId = req.params.maID;
    let hofId = req.params.hofID;
    let trophiesId = req.params.trophiesID;
    let count = 5;
    let offset = 0;
    if (req.query.offset && req.query.count) {
        count = parseInt(req.query.offset);
        offset = parseInt(eq.query.count);
    }
    madb.findById(maId).skip(offset).limit(count).exec(function (err, mart) {
        if (err) {
            response.status = 500;
            response.message = err;
        } else {
            if (mart.hallOfFame.id(hofId)) {
                if (mart.hallOfFame.id(hofId).trophies.id(trophiesId)) {
                    if (req.body.description)
                        mart.hallOfFame.id(hofId).trophies.id(trophiesId).description = req.body.description;
                    mart.save(function (err, updateMart) {
                        if (err) {
                            response.status = 500;
                            response.message = err;
                        }
                        else {
                            response.status = 200;
                            response.message = { "message": "hall of fame deleted" };
                        }
                    })
                } else {
                    response.status = 404;
                    response.message = { "message": "trophy not found" };
                }

            } else {
                response.status = 404;
                response.message = { "message": "hall of fame not found" };
            }
        }
        res.status(response.status).json(response.message);
    });
}


module.exports = {
    addOne: addOne,
    showAll: showAll,
    showOneByID: showOneByID,
    deleteOne: deleteOne,
    fullyUpdate: fullyUpdate,
    partiallyUpdate: partiallyUpdate
}