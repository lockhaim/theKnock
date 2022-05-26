
const express = require('express')
const app = express()


const PORT = 3003

app.get('/', (req, res) => {
  res.render(
    'index.ejs'
  )
})


app.listen(PORT, () => console.log( 'Listening on port:', PORT))
