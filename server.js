const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 2678
//const cors = require('cors')
const app = express()
//app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api/index.js').route)
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})