const VehicleService = require("../services/vehicles");

const getVehicles = async (req, res) => {
    try {
        const vehicles = await VehicleService.getVehicles();
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

const createVehicle = async (req, res) => {
    const vehicle = req.body;
    try {
        const message = await VehicleService.createVehicle(vehicle);
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
    getVehicles,
    createVehicle
}