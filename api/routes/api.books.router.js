const express = require('express')
const apiBooksController = require('../controllers/api.books.controller')

const router = express.Router()

router.get('/', apiBooksController.getBook)
router.post('/create', apiBooksController.postCreateBook)
router.get('/:id', apiBooksController.getBookById)
router.patch('/:id/update', apiBooksController.updateBookById)
router.delete('/:id/delete', apiBooksController.deleteBookById)

module.exports = router