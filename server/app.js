const express = require('express')
const app = express()
const routes = require('./routers/index')
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`)
// })

module.exports = app