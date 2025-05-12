import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/hola/:nombre', (req, res) => {
  const { nombre } = req.params
  res.send(`Hola, ${nombre}`)
})

app.get('/validar/:nombre', (req, res) => {
  const { nombre } = req.params
  const usuariosValidos = ['maxi', 'tati', 'mauri', 'anto', 'mateo']

  if (usuariosValidos.includes(nombre)) {
    res.status(200).send(`El nombre "${nombre}" es válido.`)
  } else {
    res.status(400).send(`El nombre "${nombre}" no es válido.`)
  }
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
