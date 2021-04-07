const express = require("express");
const bodyParser = require("body-parser");
require('./db/mongoose')

const items = require('./routes/api/Items')

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Use Routes
app.use('/api/items', items)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
