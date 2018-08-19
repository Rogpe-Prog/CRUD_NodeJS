const index = async({pessoa}, req, res) => {
    const pessoas = await pessoa.findAll()
    res.render('people/read', {pessoas})
}
const createForm = (req, res)=> {
    res.render('people/create')
}
const createProcess = async({ pessoa }, req, res)=> {
    await pessoa.create(req.body)
    res.redirect('/people')
}

module.exports = {
    index,
    createForm,
    createProcess
}