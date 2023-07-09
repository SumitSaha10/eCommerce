const express = require("express")
const app = express()

const port = 6000
const cors = require("cors")
const connectToMongo = require("./db")
connectToMongo()
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {

})

app.use("/api/auth", require("./routes/user"))
app.use("/api/senddata", require("./routes/senddata"))




app.listen(port, () => {
    console.log(`Ecommerce app listening in http://localhost:${port}`)
})