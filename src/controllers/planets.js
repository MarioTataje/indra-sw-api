const PlanetsService = require("../services/planets");

const getPlanets = async (req, res) => {
    try {
        const planets = await PlanetsService.getPlanets();
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

const createPlanet = async (req, res) => {
    const planet = req.body;
    try {
        const message = await PlanetsService.createPlanet(planet);
        return res.status(201).send(message);
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
    getPlanets,
    createPlanet
}