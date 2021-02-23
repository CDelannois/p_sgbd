const express = require('express');
const app = express();
const port = 3000;
const databaseConnexion  = require("./database/connexion");

(async () => {
    const db = await databaseConnexion();
    
    console.log('db', db);
    app.get('/', (req, res) => {
        res.send('Hello World!')
    });
    
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });
})();