const index = async({pessoa}, req, res) => {
    const pessoas = await pessoa.findAll()
    res.send(pessoas)
}

const createForm = (req, res)=> {
    res.render('pessoas/create')
}
const createProcess = async({ pessoa }, req, res)=> {
    res.send('create')
}

module.exports = {
    index,
    createForm,
    createProcess
}