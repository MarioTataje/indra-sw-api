const StarWarsService = require("../services/star_wars");

const getVehiclesSwapi = async (req, res) => {
    try {
        const vehicles = await StarWarsService.getVehiclesSwapi();

        return res.status(200).send(vehicles);
    } catch (err) {
        console.log(err);
        if(err.status) {
            return res.status(err.status).json({
                message: err.message,
            })
        }
        return res.status(500).json({
            message: 'Error on server'
        })
    }
}

const getSpeciesSwapi = async (req, res) => {
    try {
        const species = await StarWarsService.getSpeciesSwapi();
        return res.status(200).send(species);
    } catch (err) {
        console.log(err);
        if(err.status) {
            return res.status(err.status).json({
                message: err.message,
            })
        }
        return res.status(500).json({
            message: 'Error on server'
        })
    }
}

const getStarshipsSwapi = async (req, res) => {
    try {
        const starships = await StarWarsService.getStarshipsSwapi();
        return res.status(200).send(starships);
    } catch (err) {
        console.log(err);
        if(err.status) {
            return res.status(err.status).json({
                message: err.message,
            })
        }
        return res.status(500).json({
            message: 'Error on server'
        })
    }
}

const getPlanetsSwapi = async (req, res) => {
    try {
        const planets = await StarWarsService.getPlanetsSwapi();
        return res.status(200).send(planets);
    } catch (err) {
        console.log(err);
        if(err.status) {
            return res.status(err.status).json({
                message: err.message,
            })
        }
        return res.status(500).json({
            message: 'Error on server'
        })
    }
}

module.exports = {
    getVehiclesSwapi,
    getSpeciesSwapi,
    getStarshipsSwapi,
    getPlanetsSwapi
}