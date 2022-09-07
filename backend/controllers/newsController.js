const { render } = require('../app');
const New = require('../src/database/models/New');

const news = {}


//Método para obtener todas las noticias
news.getNews = async (req,res)=> {
const news = await New.find({archivedDate : { $exists: false }, deleteDate: false}).sort({date: -1})
res.json(news)
}


//Método para obtener las noticias archivadas
news.getNewsArchived = async (req,res)=>{
const news = await New.find({archivedDate : { $exists: true }, deleteDate:false}).sort({archivedDate: -1})
res.json(news)    
}


//Método para crear una noticia
news.createNews = async (req,res)=>{
const {title, description, date, content, author, archivedDate, deleteDate} = req.body;
const newNew = new New({
    title: title,
    description: description,
    date: date,
    content: content,
    author: author,
    archivedDate: archivedDate,
    deleteDate: deleteDate
})
await newNew.save()
res.json("New added")
}

//Método para obtener una noticia
news.getNew = async (req,res)=>{
    const id = req.params.id
    const newToUpdate = await New.findById(id)
    res.json(newToUpdate)
}

//Método para actualizar una noticia
news.updateNew = async (req,res)=>{
    const {title, description, date, content, author, archivedDate, deleteDate} = req.body;
    await New.findByIdAndUpdate(req.params.id, {
        title,
        description,
        date,
        content,
        author,
        archivedDate,
        deleteDate
    })
}

//Creo el método para eliminar una noticia pero no lo utilizo
news.deleteNew = async (req,res) => {
    const id = req.params.id
    await New.findByIdAndDelete(id)
}


module.exports=news