const {Specie} = require("../models/specie");
const {dynamoClient, species: tableName} = require("./../config/db");
const {v4} = require("uuid");

const getSpecies = async () => {
    const params = {TableName: tableName};
    const response = await dynamoClient.scan(params).promise();
    const species = response.Items;
    return species.map((s) => Specie.map(s));
}

const createSpecie = async (specie) => {
    specie.id = v4();
    const params = { TableName: tableName, Item: specie}
    await dynamoClient.put(params).promise()
    return {'message': 'The specie was created'};
}

module.exports = {
    getSpecies,
    createSpecie
}