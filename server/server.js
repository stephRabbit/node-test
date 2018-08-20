const express = require('express')

const app = express()

app.get('/', (req, res) => {
  // res.send('Testing Express!')
  res.status(404).send({
    error: 'Error Message!',
    name: 'Todo app v1.0'
  })
})

app.get('/users', (req, res) => {
  res.send([
    { name: 'Gizmo', age: 4 },
    { name: 'Godzill', age: 1000 }
  ])
})

app.listen(3000, () => console.log('Listening on PORT:3000'))

module.exports.app = app