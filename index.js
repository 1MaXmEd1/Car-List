const express = require('express');
const carRouter = require('./routes/car.routes.js');
const cors = require('cors');

const PORT = 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', carRouter);

app.use(express.static(__dirname));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});


app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));