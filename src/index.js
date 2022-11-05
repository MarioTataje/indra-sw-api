const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const {router: starWarsRoutes} = require("./routes/star_wars");
const {router: planetsRoutes} = require("./routes/planets");
const {router: speciesRoutes} = require("./routes/species");
const {router: starshipsRoutes} = require("./routes/starships");
const {router: vehiclesRoutes} = require("./routes/vehicles");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require('./config/swagger.json');

app.use(bodyParser.json());
app.use(cors());
app.use('/api/swapi', starWarsRoutes);
app.use('/api/planets', planetsRoutes);
app.use('/api/species', speciesRoutes);
app.use('/api/starships', starshipsRoutes);
app.use('/api/vehicles', vehiclesRoutes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

const PORT = 4040;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
