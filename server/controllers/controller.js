let id = 0
const toolsList = require('../db.json')
// const newToolsList = Object.assign({}, toolsList)
const toolBox = []

module.exports ={
    addToBox: (req,res) => {
        const addedTool = {...req.body, id}
        toolBox.push(addedTool)
        id++
        res.status(200).send(toolBox)
    },

    getAll: (req,res) => {
        res.status(200).send(toolsList)
    },
    rename: (req,res) => {
        const{id} = req.params
        const {name} = req.body
        const index = toolBox.findIndex(el => el.id === +id)
        toolBox[index].name = name
        res.status(200).send(toolBox)
    },
    yeet: (req,res) => {
        const{id} =req.params
        const index = toolBox.findIndex(el => el.id ===+id)
        toolBox.splice(index,1)
        res.status(200).send(toolBox)
    }
}