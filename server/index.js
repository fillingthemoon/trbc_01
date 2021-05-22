const express = require('express')
const app = express()
const mongo = require('./Mongo')
const cors = require('cors')
require('dotenv/config')

const postRoute = require('./routes/PostRoute')

const teamRoute = require('./routes/TeamRoute')
const outreachRoute = require('./routes/OutreachRoute')
const serviceRoute = require('./routes/ServiceRoute')
const visionRoute = require('./routes/VisionRoute')
const statementRoute = require('./routes/StatementRoute')
const missionRoute = require('./routes/MissionRoute')

app.use(express.json({ limit: '500kb' }))
app.use(express.urlencoded({ limit: '500kb' }))

app.use(cors())

app.use('/posts', postRoute)
app.use('/team', teamRoute)
app.use('/outreach', outreachRoute)
app.use('/service', serviceRoute)
app.use('/vision', visionRoute)
app.use('/statement', statementRoute)
app.use('/mission', missionRoute)

//routes
app.get('/', (req, res) => {
  res.send('Home')
})

async function start() {
  await mongo.init()
}

try {
  start()
} catch (error) {
  console.log(error)
}

app.listen(8080)