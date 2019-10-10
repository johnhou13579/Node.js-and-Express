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


app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(p=>{
    response.json(p.toJSON())
  })
})

/* const generateId = () => {
  const maxId = Person.length > 0
    ? Math.max(...Person.map(n => n.id))
    : 0
  return maxId + 1
}
 */

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

