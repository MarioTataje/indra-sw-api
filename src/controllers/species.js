const SpeciesService = require("../services/species");

const getSpecies = async (req, res) => {
    try {
        const species = await SpeciesService.getSpecies();
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

const createSpecie = async (req, res) => {
    const specie = req.body;
    try {
        const message = await SpeciesService.createSpecie(specie);
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
    getSpecies,
    createSpecie
}