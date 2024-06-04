
const express = require("express")
const axios = require("axios")
const router = express.Router()

const api = "https://api.warframe.market/v1/items"

router.get('/', (req, res) => {
    axios.get(api)
    .then((response) => {
        res.json(response.data)
    })
    .catch((err) => {
        console.log(err)
    })
})

router.get('/:itemName', (req, res) => {
    
    axios.get(api + "/" + req.params.itemName)
    .then((response) => {
        res.json(response.data)
    })
    .catch((err) => {
        console.log(err)
    })
})

module.exports = router