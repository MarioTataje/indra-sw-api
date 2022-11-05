const router = require("express").Router({mergeParams: true});
const  {getSpecies, createSpecie} = require("../controllers/species");
const { validate } = require("./../config/validate");
const {checkSchema} = require("express-validator");
const { specieSchema } = require("../schemas/specie");

router.get('/', getSpecies);
router.post('/', validate(checkSchema(specieSchema)), createSpecie);

module.exports = {
    router,
}
