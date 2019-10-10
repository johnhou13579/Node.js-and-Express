const mongoose = require('mongoose')

//MongoDB Setup
const url =
  'mongodb+srv://admin:snowleopard@cluster0-ghplz.mongodb.net/person-app?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true })

const noteSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: String
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', noteSchema)

