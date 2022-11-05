const router = require("express").Router({mergeParams: true});
const  {getVehiclesSwapi, getSpeciesSwapi, getStarshipsSwapi, getPlanetsSwapi} = require("../controllers/star_wars");

router.get('/vehicles', getVehiclesSwapi);
router.get('/species', getSpeciesSwapi);
router.get('/starships', getStarshipsSwapi);
router.get('/planets', getPlanetsSwapi);

module.exports = {
    router,
}
