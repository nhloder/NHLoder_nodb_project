require('dotenv').config()
const express = require('express')
const {SERVER_PORT} = process.env
const ctrl = require('./controllers/controller')
// const tools = require('.db.json')

const app = express()

app.use(express.json())

//*** ENDPOINTS ***//

// app.post(``, ctrl.)
app.get(`/ToolsList.json`, ctrl.getAll)
// app.put(``, ctrl.)
// app.delete(``, ctrl.delete)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} bottles of [ R E D A C T E D ] on the wall!`))