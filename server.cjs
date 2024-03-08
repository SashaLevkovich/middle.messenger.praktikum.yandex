const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

const staticPath = path.join(__dirname, 'dist')

app.use(express.static(staticPath))
app.use(express.static('public'))

app.get('*', (req, res) => {
  res.status(200)
  res.sendFile(path.join(staticPath, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`My Chat listening on port ${PORT}!`)
})
