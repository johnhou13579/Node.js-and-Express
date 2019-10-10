//node index.js
//npm start

//npm run watch

//git push
//git push heroku master
//heroku local web

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('build'))

//MongoDB Setup
const url =
  'mongodb+srv://admin:<snowleopard>@cluster0-ghplz.mongodb.net/person-app?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true })

const noteSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Note = mongoose.model('Note', noteSchema)

//API Calls
app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/info', (req, res) => {
  const num = persons.length
  const date = new Date()
  res.send(`<p> Phonebook has info for ${num} people </p> ${date}`)
})


app.get('/api/persons/:id', (request, response) => {
  Note.find({}).then(notes=>{
    response.json(notes)
  })

})

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId + 1
}


app.post('/api/persons', (request, response) => {
  const body = request.body
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'Name or Number content missing'
    })
  }
  console.log(persons.map(p => p.name === body.name))
  if (persons.map(p => p.name === body.name).includes(true)) {
    console.log(body.name)
    return response.status(400).json({
      error: 'Name already exists.'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId()
  }

  persons = persons.concat(person)

  response.json(persons)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(p => p.id === id)

  persons = persons.filter(p => p.id !== id)
  response.json(persons.filter(p => p.id !== id))
})

let port = process.env.PORT

if (port == null || port == "" ? port = 3001 : port = process.env.PORT)

  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })

