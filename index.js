//node index.js
//npm start

//npm run watch

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

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
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}


app.post('/notes', (request, response) =>{
    const body = request.body

    if(!body.content){
      return response.status(400).json({
        error: 'content missing'
      })
    }

    const note={
      content: body.content,
      important: body.important || false,
      date: new Date(),
      id: generateId()
    }

    notes = notes.concat(note)

    response.json(note)
})

const port = 3001
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})

