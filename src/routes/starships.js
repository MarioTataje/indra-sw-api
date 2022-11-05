const router = require("express").Router({mergeParams: true});
const  {getStarships, createStarship} = require("../controllers/starships");
const { validate } = require("./../config/validate");
const {checkSchema} = require("express-validator");
const { starshipSchema } = require("../schemas/starship");

router.get('/', getStarships);
router.post('/', validate(checkSchema(starshipSchema)), createStarship);

module.exports = {
    router,
}
