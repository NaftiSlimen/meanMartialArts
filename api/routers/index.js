const express = require("express");
const router = express.Router();
const maController = require("../controllers/martialArtsConstoller.js");
const caracteristicsController = require("../controllers/caracteristicsController.js");
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

module.exports = router;