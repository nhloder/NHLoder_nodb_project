const tools =[]
let id = 0

module.exports ={
    getAll: (req,res) => {
        res.status(200).send(tools)
    }
}