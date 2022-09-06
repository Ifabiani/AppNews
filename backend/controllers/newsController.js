const { render } = require('../app');
const New = require('../src/database/models/New');

const news = {}



news.getNews = async (req,res)=> {
const news = await New.find()
res.json(news)
}

news.createNews = async (req,res)=>{
const {title, description, date, content, author, archiveDate} = req.body;
const newNew = new New({
    title: title,
    description: description,
    date: date,
    content: content,
    author: author,
    archiveDate: archiveDate
})
await newNew.save()
}

news.getNew = async (req,res)=>{
    const id = req.params.id
    const newToUpdate = await New.findById(id)
    res.json(newToUpdate)
}

news.updateNew = async (req,res)=>{
    const {title, description, date, content, author, archiveDate} = req.body;
    await New.findByIdAndUpdate(req.params.id, {
        title,
        description,
        date,
        content,
        author,
        archiveDate
    })

    
}

news.deleteNew = async (req,res) => {
    const id = req.params.id
    await New.findByIdAndDelete(id)
}


module.exports=news