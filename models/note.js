const mongoose = require('mongoose')
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
mongoose.set('useFindAndModify', false)


//MongoDB Setup
const url =
  'mongodb+srv://admin:snowleopard@cluster0-ghplz.mongodb.net/person-app?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true })

const noteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true  
  },
  number: {
      type: String,
      require: true
  },
  id: String
})
userSchema.plugin(uniqueValidator);


noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', noteSchema)

