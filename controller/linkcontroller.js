const Link = require('../model/Link')

const all = async (req, res)=>{
    try {
        let docs = await Link.find({})
        res.render('index', {docs})
    } catch (error) {
        res.send(error)
    }
}

const deletedoc = async (req, res)=>{
    let deleteid = req.params.id
    try {
        await Link.deleteOne({_id: deleteid})
        res.redirect('/')
    } catch (error) {
        res.send(error)
    }
}

const redirect = async (req, res)=>{
    let id = req.params.id
    try {
        let doc = await Link.findOneAndUpdate({_id: id}, {$inc: {click: 1}})
        res.redirect(doc.url)
    } catch (error) {
        
    }
}

const savedoc = async (req, res)=>{
    let doc = req.body

    try {
        await new Link(doc).save()
        res.redirect('/')
    } catch (error) {
        res.render('add', {error, body: doc})        
    }
}

const showforedit = async (req, res)=>{
    let id = req.params.id
    try {
        let doc = await Link.findOne({_id:id})
        res.render('edit', {error: false, body: doc})
    } catch (error) {
        res.send(error)
    }
}

const editdoc = async (req, res)=>{
    let id = req.params.id
    let editdoc = {
        title: req.body.title,
        description: req.body.description,
        url: req.body.url
    }
    console.log(editdoc)
    try {
        await Link.updateOne({_id: id}, editdoc)
        res.redirect('/')
    } catch (error) {
        res.render('edit', {error, body: req.body})
    }
}

module.exports = {
    all,
    deletedoc,
    redirect,
    savedoc,
    showforedit,
    editdoc
}