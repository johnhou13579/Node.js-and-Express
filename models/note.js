const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');
mongoose.set('useFindAndModify', false)


//MongoDB Setup
const url =
  'mongodb+srv://admin:snowleopard@cluster0-ghplz.mongodb.net/person-app?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true })

const noteSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true  
  },
  number: {
      type: String,
      minlength: 8,
      required: true
  },
  id: String
})
noteSchema.plugin(uniqueValidator);


noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', noteSchema)

