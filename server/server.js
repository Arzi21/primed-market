
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extrended:false}));


const corsOptions = {
    origin: "*",
    credential: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

const port = 4000;
const Server = app.listen(port, () => {
    console.log('Server is running on port ' + port);
});

