//node index.js
//npm start

//npm run watch

//git push heroku master
//heroku local web

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())


let persons = [
  { 
    "name": "Arto Hellas", 
    "number": "040-123456",
    "id": 1
  },
  { 
    "name": "Ada Lovelace", 
    "number": "39-44-5323523",
    "id": 2
  },
  { 
    "name": "Dan Abramov", 
    "number": "12-43-234345",
    "id": 3
  },
  { 
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122",
    "id": 4
  }
]

app.get('/', (req, res)=>{
    res.send('<h1> Hi World </h1>')
})

app.get('/api/persons', (req, res)=>{
  res.json(persons)
})

app.get('/info', (req, res)=>{
  const num = persons.length
  const date = new Date()
  res.send(`<p> Phonebook has info for ${num} people </p> ${date}`)
})


app.get('/api/persons/:id',(request, response)=>{
    const id = Number(request.params.id)
    const person = persons.find(p=>p.id===id)

    if(person){
        response.json(person)
    }else{
        response.status(404).end()
    }
    
})

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId + 1
}


app.post('/api/persons', (request, response) =>{
    const body = request.body
    if(!body.name || !body.number){
      return response.status(400).json({
        error: 'Name or Number content missing'
      })
    }
    console.log(persons.map(p=> p.name === body.name))
    if(persons.map(p=> p.name === body.name).includes(true))
    {
      console.log(body.name)
      return response.status(400).json({
        error: 'Name already exists.'
      })
    }

    const person={
      name: body.name,
      number: body.number,
      id: generateId()
    }

    persons = persons.concat(person)

    response.json(persons)
})

app.delete('/api/persons/delete/:id',(request, response)=>{
    const id = Number(request.params.id)
    const person = persons.find(p=>p.id===id)

    persons = persons.filter(p=>p.id!==id)
    response.json(persons.filter(p=>p.id!==id))
})

let port = process.env.PORT

if(port==null || port =="" ? port=3001: port=process.env.PORT)

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})

