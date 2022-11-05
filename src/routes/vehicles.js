const router = require("express").Router({mergeParams: true});
const  {getVehicles, createVehicle} = require("../controllers/vehicles");
const { validate } = require("./../config/validate");
const {checkSchema} = require("express-validator");
const { vehicleSchema } = require("../schemas/vehicle");

router.get('/', getVehicles);
router.post('/', validate(checkSchema(vehicleSchema)), createVehicle);

module.exports = {
    router,
}
