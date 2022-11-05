const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1',
    accessKeyId: 'AKIA5UK3SZK6ATODC7N3',
    secretAccessKey: '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'
})

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const vehicles = 'vehicles';
const species = 'species';
const starships = 'starships';
const planets = 'planets';

module.exports = {
    dynamoClient,
    vehicles,
    species,
    starships,
    planets
}
