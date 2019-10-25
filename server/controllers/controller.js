let id = 0
const toolsList = require('../db.json')

module.exports ={
    getAll: (req,res) => {
        res.status(200).send(toolsList)
    }
}