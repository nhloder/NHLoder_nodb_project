require('dotenv').config()
const express = require('express')
const {SERVER_PORT} = process.env
const ctrl = require('./controllers/controller')
// const tools = require('.db.json')

const app = express()

app.use(express.json())

//*** ENDPOINTS ***//

app.post(`/api/myToolBox`, ctrl.addToBox)
app.get(`/api/myToolBox`,ctrl.getBox)
app.get(`/api/toolsList`, ctrl.getAll)
app.put(`/api/myToolBox/:id`, ctrl.rename)
app.delete(`/api/myToolBox/:id`, ctrl.yeet)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} [ R E D A C T E D ] marching on Rome.`))