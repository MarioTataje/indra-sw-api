const {Vehicle} = require("../models/vehicle");
const {dynamoClient, vehicles: tableName} = require("./../config/db");
const {v4} = require("uuid");

const getVehicles = async () => {
    const params = {TableName: tableName};
    const response = await dynamoClient.scan(params).promise();
    const vehicles = response.Items;
    return vehicles.map((v) => Vehicle.map(v));
}

const createVehicle = async (vehicle) => {
    vehicle.id = v4();
    const params = { TableName: tableName, Item: vehicle}
    await dynamoClient.put(params).promise()
    return {'message': 'The vehicle was created'};
}

module.exports = {
    getVehicles,
    createVehicle
}