const express = require('express');
const cors = require('cors');
const { PORT } = require("./config");

const databaseConfig = require("./config/database");
const catalogController = require('./controllers/catalogController');

start();


async function start(){
    const app = express();
    await databaseConfig(app);
    app.use(cors());
    app.use(express.json());
    app.use('/data/catalog', catalogController )
    
    app.get('/', (req,res) => res.send('Heyyy'));
    
    app.listen(PORT, () => console.log(`REST service is listening on port ${PORT}.`))
}
