const express = require('express');
const bodyParser = require("body-parser");
const PORT = process.env.port || 3005;
require('./utils/db')
const userRoutes = require('./routes/userRoutes');


const app = express();
app.use(bodyParser.json());

app.use('/api/userOperations', userRoutes);

app.get('/', (req, res) => {
    res.send({"message" : "Hello G"})
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
