
const express = require("express")
const axios = require("axios")


const app = express()
const port = 4000

const logger = function() {
    console.log("Server listening to port " + port)
}




app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    logger()
})