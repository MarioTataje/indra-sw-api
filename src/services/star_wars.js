const axios = require("axios");
const {Vehicle} = require("../models/vehicle");
const {Specie} = require("../models/specie");
const {Starship} = require("../models/starship");
const {Planet} = require("../models/planet");

const getVehiclesSwapi = async () => {
    const {data} = await axios.get('https://swapi.py4e.com/api/vehicles/');
    const vehicles = data.results;
    return vehicles.map((v) => Vehicle.mapData(v));
}

const getSpeciesSwapi = async () => {
    const {data} = await axios.get('https://swapi.py4e.com/api/species/');
    const species = data.results;
    return species.map((s) => Specie.mapData(s));
}

const getStarshipsSwapi = async () => {
    const {data} = await axios.get('https://swapi.py4e.com/api/starships/');
    const starships = data.results;
    return starships.map((s) => Starship.mapData(s));
}

const getPlanetsSwapi = async () => {
    const {data} = await axios.get('https://swapi.py4e.com/api/planets/');
    const planets = data.results;
    return planets.map((p) => Planet.mapData(p));
}

module.exports = {
    getVehiclesSwapi,
    getSpeciesSwapi,
    getStarshipsSwapi,
    getPlanetsSwapi
}