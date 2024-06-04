
const express = require("express")
const axios = require("axios")


const app = express()
const port = 4000

const logger = function() {
    console.log("Server listening to port " + port)
}




app.get('/', (req, res) => {
    axios.get("https://api.warframe.market/v1/items")
    .then((response) => {
        res.json(response.data)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.listen(port, () => {
    logger()
})