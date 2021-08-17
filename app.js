const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')

const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  res.send('Good!')
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
