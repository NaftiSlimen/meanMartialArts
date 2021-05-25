const express = require("express");
const router = express.Router();
const maController = require("../controllers/martialArtsConstoller.js");
const caracteristicsController = require("../controllers/caracteristicsController.js");
const hallOfFameController = require("../controllers/hallOfFameController.js");
const trophiesController = require("../controllers/trophiesController.js");
//Martial arts route
router.route("/api/martialArts")
    .get(maController.showAll)
    .post(maController.addMartialArt);
router.route("/api/martialArts/:maID")
    .delete(maController.removeMartialArt)
    .get(maController.showOne)
    .put(maController.fullyUpdateMartialArt)
    .patch(maController.partiallyUpdateMartialArt);
//caracteristics route
router.route("/api/martialArts/:maID/caracteristics")
    .get(caracteristicsController.showAllCaracteristics)
    .post(caracteristicsController.addCaracteristic)
    .delete(caracteristicsController.deleteCaracteristic)
router.route("/api/martialArts/:maID/caracteristics/:carID")
    .patch(caracteristicsController.partiallyUpdateCaracteristic)
    .put(caracteristicsController.fullyUpdateCaracteristic);
//halloffame routes
router.route("/api/martialArts/:maID/halloffame")
    .get(hallOfFameController.showAll)
    .post(hallOfFameController.addOne);

router.route("/api/martialArts/:maID/halloffame/:hofID")
    .get(hallOfFameController.showOneByID)
    .delete(hallOfFameController.deleteOne)
    .put(hallOfFameController.fullyUpdate)
    .patch(hallOfFameController.partiallyUpdate)
//trophies routes
router.route("/api/martialArts/:maID/halloffame/:hofID/trophies")
    .get(trophiesController.showAll)
    .post(trophiesController.addOne);

router.route("/api/martialArts/:maID/halloffame/:hofID/trophies/:trophiesID")
    .get(trophiesController.showOneByID)
    .delete(trophiesController.deleteOne)
    .put(trophiesController.fullyUpdate)
    .patch(trophiesController.partiallyUpdate)
module.exports = router;