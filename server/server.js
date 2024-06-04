
const express = require("express")
const router = express.Router()

const itemRouter = require("./routes/items")


const app = express()
const port = 4000

const logger = function() {
    console.log("Server listening to port " + port)
}



app.use('/items', itemRouter)

app.listen(port, () => {
    logger()
})