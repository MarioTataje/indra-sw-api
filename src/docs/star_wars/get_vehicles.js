const get_vehicles = {
    get:{
        tags: ['Star Wars operations'],
        description: "Obtiene los vehiculos de SWAPI",
        operationId: 'getVehicles',
        parameters:[],
        responses:{
            '200':{
                description:"Los vehiculos de la SWAPI han sido obtenidos",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Vehiculo'
                        }
                    }
                }
            }
        }
    }
}

module.exports = {get_vehicles}