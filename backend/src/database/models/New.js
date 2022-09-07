const {Schema, model} = require('mongoose')

const newSchema = new Schema({
        title: {
            type: String
        },
        description: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now
        },
        content: {
            type: String
        },
        author: {
            type: String
        },
        archivedDate: {
            type: Date,
            default: {}
        },
        deleteDate: {
            type: Boolean,
            default: false
        }},
        {timestamps: true}
    
)

module.exports = model('New', newSchema)