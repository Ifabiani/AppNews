var express = require('express');
var router = express.Router();
const {getNews, createNews, getNew, updateNew, deleteNew} = require('../controllers/newsController');

router.route('/') 
.get(getNews)
.post(createNews)

router.route('/:id')
.get(getNew)
.put(updateNew)
.delete(deleteNew)

module.exports = router;
