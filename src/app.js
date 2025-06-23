const express = require('express');
const bodyParser = require('body-parser');
const roupasRoutes = require('./routes/roupasRoutes');
const database = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

database.connect();

app.use('/api/roupas', roupasRoutes());

app.listen(PORT, () => {
    console.log(`Server rodando ${PORT}`);
});