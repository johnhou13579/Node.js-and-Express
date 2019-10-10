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
const Person = require('./models/note')

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('build'))


//API Calls
app.get('/api/persons', (req, res) => {
  Person.find({}).then(p => {
    res.json(p.map(l=>l.toJSON()))
  })
})

app.get('/info', (req, res) => {
  const num = persons.length
  const date = new Date()
  res.send(`<p> Phonebook has info for ${num} people </p> ${date}`)
})

//GET retrieve by ID
app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).
  then(p=>{
     if(p){
       response.json(p.toJSON())
     }else{
       response.status(404).end()
    }
  })
  .catch(error => {
    console.log(error);
    response.status(404).send({error:'malformatted id'})
  })
})

//POST adding person
app.post('/api/persons', (request, response) => {
  const body = request.body

  if (body === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const persons = new Person({
    name: body.name,
    number: body.number,
    })

  persons.save().then(p => {
    response.json(p.toJSON())
  })
})

//DELETE removing person
app.delete('/api/persons/:id', (request, response) => {
  Note.findByIdAndRemove(requeust.params.id)
  .then(result => {
    response.status(204).end()
  })
})

app.put('/api/persons/:id', (request, response) => {
  const body = request.body
  const person = {
    name: body.name,
    number = body.number,
  }

  Note.findByIdAndUpdate(request.params.id, note, {new: true})
    .then(updatedPerson => {
      response.json(updatedPerson.toJSON())
    })
})

let port = process.env.PORT

if (port == null || port == "" ? port = 3001 : port = process.env.PORT)

  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })

