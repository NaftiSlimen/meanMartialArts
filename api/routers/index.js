const express = require("express");
const router = express.Router();
const maController = require("../controllers/martialArtsConstoller.js");

router.route("/api/martialArts")
    .get(maController.showAll)
    .post(maController.addMartialArt);

router.route("/api/martialArts/:maID")
    .delete(maController.removeMartialArt)
    .get(maController.showOne)
    .put(maController.fullyUpdateMartialArt)
    .patch(maController.partiallyUpdateMartialArt);

module.exports = router;