const express = require('express');
const app = express();
const port = 8000;
const DB_NAME = "Portfolio"
const cors = require('cors');

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config")(process.env.DB_NAME);

const server = app.listen(port, () => console.log(`Server is up oon port ${port}`));