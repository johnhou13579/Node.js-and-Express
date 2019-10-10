//node mongo.js <password>

const mongoose = require('mongoose')

const url =
  'mongodb+srv://admin:snowleopard@cluster0-ostce.mongodb.net/note-app?retryWrites=true'

mongoose.connect(url, { useNewUrlParser: true })

const noteSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Note = mongoose.model('Note', noteSchema)

if (process.argv.length < 3 ) {
    console.log('give password as argument')
    process.exit(1)
}else if(process.argv.length === 3){
    display()
}else if(process.argv.length ===4){
    console.log('not enough arguments')
    process.exit(1)
}else if(process.argv.length===5){
    console.log(process.argv[4])
    store()
}else{
    console.log('too many arguments')
    process.exit(1)
}

function initial(){
    const password = process.argv[2]
    const nameTemp = process.argv[3]
    const numberTemp = process.argv[4]
    
    const url =
        `mongodb+srv://admin:${password}@cluster0-ghplz.mongodb.net/person-app?retryWrites=true&w=majority`
    mongoose.connect(url, { useNewUrlParser: true })
    
    const noteSchema = new mongoose.Schema({
        name: String,
        number: String
    })
    
    const Person = mongoose.model('Note', noteSchema)
    
    const persons = new Person({
        name: nameTemp,
        number: numberTemp
    })

}


function store(){
    const password = process.argv[2]
    const nameTemp = process.argv[3]
    const numberTemp = process.argv[4]
    
    const url =
        `mongodb+srv://admin:${password}@cluster0-ghplz.mongodb.net/person-app?retryWrites=true&w=majority`
    mongoose.connect(url, { useNewUrlParser: true })
    
    const noteSchema = new mongoose.Schema({
        name: String,
        number: String
    })
    
    const Person = mongoose.model('Note', noteSchema)
    
    const persons = new Person({
        name: nameTemp,
        number: numberTemp
    })
    persons.save().then(response => {
        console.log(`added ${nameTemp} number ${numberTemp} to phonebook`)
        mongoose.connection.close()
      })
}

function display(){
    const password = process.argv[2]
    const nameTemp = process.argv[3]
    const numberTemp = process.argv[4]
    
    const url =
        `mongodb+srv://admin:${password}@cluster0-ghplz.mongodb.net/person-app?retryWrites=true&w=majority`
    mongoose.connect(url, { useNewUrlParser: true })
    
    const noteSchema = new mongoose.Schema({
        name: String,
        number: String
    })
    
    const Person = mongoose.model('Note', noteSchema)
    
    const persons = new Person({
        name: nameTemp,
        number: numberTemp
    })

    Person.find({}).then(result => {
        result.forEach(persons => {
          console.log(`${persons.name} ${persons.number}`)
        })
        mongoose.connection.close()
      })
      
}

