const {get_vehicles} = require("./get_vehicles");

module.exports = {
    paths:{
        '/swapi/vehicles':{
            get_vehicles
        }
    }
}