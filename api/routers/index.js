const express = require("express");
const router = express.Router();
const maController = require("../controllers/martialArtsConstoller.js");
const caracteristicsController = require("../controllers/caracteristicsController.js");
const hallOfFameController = require("../controllers/hallOfFameController.js");
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

module.exports = router;