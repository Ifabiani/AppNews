var express = require('express');
var router = express.Router();
const {getNews, createNews, getNew, updateNew, deleteNew, getNewsArchived} = require('../controllers/newsController');


//Creo el endpoint donde podré consultar y crear todas las noticias
router.route('/') 
.get(getNews)
.post(createNews)

//Creo el endpoint donde podré consultar sólo las noticias archivadas
router.route('/archived')
.get(getNewsArchived)

//Creo el endpoint donde podré consultar, modificar y eliminar una noticia en particular. Este último no lo utilizo ya que luego manejo un soft delete
router.route('/:id')
.get(getNew)
.put(updateNew)
.delete(deleteNew)

module.exports = router;
