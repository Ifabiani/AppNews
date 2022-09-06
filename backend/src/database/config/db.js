const mongoose = require('mongoose')
const URI = 'mongodb://localhost/News'

mongoose.connect(URI,{
useNewUrlParser: true,
// useCreateIndex: true,
keepAlive: true,
useUnifiedTopology:true,
// useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', ()=>
console.log('Base de datos conectada')
)




