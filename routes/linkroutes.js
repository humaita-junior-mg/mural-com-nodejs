const express = require('express')
const router = express.Router()
const controller = require('../controller/linkcontroller')


/* Mural */

router.get('/', controller.all)

router.delete('/:id', controller.deletedoc)

router.get('/re/:id', controller.redirect)

/* Add */

router.get('/add', (req, res)=>{
    res.render('add', {error: false, body: {}})
})

router.post('/add', express.urlencoded({extended: true}), controller.savedoc)

/* Edit */

router.get('/edit/:id', controller.showforedit)

router.post('/edit/:id', express.urlencoded({extended: true}), controller.editdoc)

module.exports = router

