let id = 0

const toolsList = require('../db.json')
// const newToolsList = Object.assign({}, toolsList)
const toolBox = []
// const myToolBox = require('../myToolBox.json')
module.exports ={
    addToBox: (req,res) => {
        const addedTool = {...req.body, id}
        toolBox.push(addedTool)
        id++
        res.status(200).send(toolBox)
    },
    getBox: (req,res) => {
        res.status(200).send(toolBox)
    },

    getAll: (req,res) => {
        res.status(200).send(toolsList)
    },
    rename: (req,res) => {
        const{id} = req.params
        console.log(id)
        const {nickName} = req.body
        const index = toolBox.findIndex(el => +el.id === +id)
        console.log(index)
        toolBox[index].nickName = nickName
        res.status(200).send(toolBox)
    },
    yeet: (req,res) => {
        const {id} = req.params
        // console.log(req.params)
        // console.log(toolBox)
        const index = toolBox.findIndex(el => +el.id === +id)
        // console.log(index)
        toolBox.splice(index,1)
        res.status(200).send(toolBox)
    }
}