const StarshipsService = require("../services/starships");

const getStarships = async (req, res) => {
    try {
        const starships = await StarshipsService.getStarships();
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

const createStarship = async (req, res) => {
    const starship = req.body;
    try {
        const message = await StarshipsService.createStarship(starship);
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
    getStarships,
    createStarship
}