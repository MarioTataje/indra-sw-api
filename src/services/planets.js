const {Planet} = require("../models/planet");
const {dynamoClient, planets: tableName} = require("./../config/db");
const {v4} = require("uuid");

const getPlanets = async () => {
    const params = {TableName: tableName};
    const response = await dynamoClient.scan(params).promise();
    const planets = response.Items;
    return planets.map((p) => Planet.map(p));
}

const createPlanet = async (planet) => {
    planet.id = v4();
    const params = { TableName: tableName, Item: planet}
    await dynamoClient.put(params).promise()
    return {'message': 'The planet was created'};
}

module.exports = {
    getPlanets,
    createPlanet
}