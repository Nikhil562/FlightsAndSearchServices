const express = require("express");
const bodyParser = require("body-parser");
const CityRepository = require("./repository/city-repository")

const { PORT } = require('./config/serverConfig');
const db = require('./models/index')
const setupAndStartServer = async () => {

    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, async() => {
        console.log(`Server started at ${PORT}`);
        const repo = new CityRepository();
        // repo.createCity({name:"New Delhi"})
    });

}
setupAndStartServer();