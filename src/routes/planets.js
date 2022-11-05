const router = require("express").Router({mergeParams: true});
const  {getPlanets, createPlanet} = require("../controllers/planets");
const { validate } = require("./../config/validate");
const {checkSchema} = require("express-validator");
const { planetSchema } = require("../schemas/planet");

router.get('/', getPlanets);
router.post('/', validate(checkSchema(planetSchema)), createPlanet);

module.exports = {
    router,
}
