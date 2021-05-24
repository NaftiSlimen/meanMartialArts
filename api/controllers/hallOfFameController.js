const mongoose = require("mongoose");
const madb = mongoose.model("martialArts");


const showOneByID=function(req,res){
    let response={status:200};
    let maId=req.params.maID;
    let hofId=req.params.hofID;
    madb.findById(maId).exec(function (err,hof){
        if (err) {
            response.status(500);
            response.message=err;
        }else{
            response.message=hof.hallOfFame.id(hofId);
        }
        res.status(response.status).json(response.message);
    });
}

const showAll=function(req,res){
    let offset=0;
    let count=5;
    let response={status:200};
    let maId=req.params.maID;
    if (req.body&&req.query.offset&&req.query.count){
        offset=parseInt(eq.query.offset);
        count=parseInt(req.query.count); 
    }

    madb.findById(maId).skip(offset).limit(count).exec(function (err,ma){
        if (err) {
            response.status(500);
            response.message=err;
        }else{
            response.message=ma.hallOfFame;
        }
        res.status(response.status).json(response.message);
    });
}

const deleteOne=function(req,res){
    let response={status:200};
    let maId=req.params.maID;
    let hofId=req.params.hofID;
    madb.findById(maId).exec(function (err,ma){
        if (err) {
            response.status(500);
            response.message=err;
        }else if(ma){
            if (ma.hallOfFame){
                ma.hallOfFame.remove(hofId);
                response.status = 200;
                response.message = { "message": "hall of fame with ID "+hofId+" was removed" };
                ma.save(function (err, updateMart) {
                    if (err) {
                        response.status = 500;
                        response.message = err;
                    }
                    else {
                        response.status = 200;
                        response.message = { "message": "hall of fame deleted" };
                    }
                })
            }else{
                response.status = 404;
                response.message = { "message": "hall of fame not found" };
            }

            
        }else{
            response.status = 404;
            response.message = { "message": "martial art not found" };
        }
        res.status(response.status).json(response.message);
    });
}

const addOne=function(req,res){
    let maId=req.params.maID;
    let response={status:200};
    if (req.body.fullName&&req.body.countryOfOrigin&&req.body.trophies){
        
        madb.findOneAndUpdate(
            { _id: maId },
            { $push: { hallOfFame: { "fullName":req.body.fullName, "countryOfOrigin": req.body.countryOfOrigin, "trophies": req.body.trophies} } },
            function (err, ma) {

                if (err) {
                    console.log(err);
                } else {
                    console.log(ma);
                }

            });
    }else{ 
        response.status=500;
        response.message={ "message": "error adding hof" };}
    res.status(response.status).json(response.message);
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