const { render } = require('../app');
const New = require('../src/database/models/New');

const news = {}



news.getNews = async (req,res)=> {
const news = await New.find({archivedDate: false, deleteDate: false})
res.json(news)
}

news.getNewsArchived = async (req,res)=>{
const news = await New.find({archivedDate: true, deleteDate:false})
res.json(news)    
}

news.createNews = async (req,res)=>{
const {title, description, date, content, author, archiveDate, deleteDate} = req.body;
const newNew = new New({
    title: title,
    description: description,
    date: date,
    content: content,
    author: author,
    archiveDate: archiveDate,
    deleteDate: deleteDate
})
await newNew.save()
}

news.getNew = async (req,res)=>{
    const id = req.params.id
    const newToUpdate = await New.findById(id)
    res.json(newToUpdate)
}

news.updateNew = async (req,res)=>{
    const {title, description, date, content, author, archiveDate, deleteDate} = req.body;
    await New.findByIdAndUpdate(req.params.id, {
        title,
        description,
        date,
        content,
        author,
        archiveDate,
        deleteDate
    })

    
}

news.deleteNew = async (req,res) => {
    const id = req.params.id
    await New.findByIdAndDelete(id)
}


module.exports=news