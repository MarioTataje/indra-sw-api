const {Starship} = require("../models/starship");
const {dynamoClient, starships: tableName} = require("./../config/db");
const {v4} = require("uuid");

const getStarships = async () => {
    const params = {TableName: tableName};
    const response = await dynamoClient.scan(params).promise();
    const starships = response.Items;
    return starships.map((s) => Starship.map(s));
}

const createStarship = async (starship) => {
    starship.id = v4();
    const params = { TableName: tableName, Item: starship}
    await dynamoClient.put(params).promise()
    return {'message': 'The starship was created'};
}

module.exports = {
    getStarships,
    createStarship
}