const { ObjectID } = require('bson')
const express = require('express')
const router = express.Router()
const mongo = require('../Mongo')
const multer = require('multer')
const AWS = require('aws-sdk')

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
})

const storage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, '')
  },
})
const upload = multer({ storage }).single('image')
router.post('/upload', upload, (req, res) => {

  const buf = Buffer.from(
    req.body.image.replace(/^data:image\/\w+;base64,/, ''),
    'base64'
  )
  var imageUrl = ''
  const params = {
    Key: req.body.name,
    Bucket: 'trbcbucket',
    ContentType: 'image/png',
    Body: buf,
    ContentEncoding: 'base64',
  }
  s3.upload(params, (error, data) => {
    if (error) {
      res.status(500).send(error)
    }
    console.log(String(data.Location))
    imageUrl = String(data.Location)
    res.status(200).send(data)

  })
  return imageUrl
})

router.get('/', (req, res) => {
  async function getAll() {
    const cursor = await mongo.Mission.getAll()
    cursor.toArray().then((i) => {
      res.json(i)
    })
  }
  getAll()
})

router.post('/', (req, res) => {
  const Mission = {
    type: req.body.type,
    key: req.body.key,
    summary: req.body.summary,
    writeup: req.body.writeup,
    image: req.body.image,
  }

  async function setMission() {
    const result = await mongo.Mission.setMission(Mission)
    res.json(result.ops)
  }
  setMission()
})

router.put('/', (req, res) => {
  // console.log(req.body.image)
  const buf = Buffer.from(
    req.body.image.replace(/^data:image\/\w+;base64,/, ''),
    'base64'
  )
  var imageUrl = ''

  const params = {
    Key: req.body._id + '1',
    Bucket: 'trbcbucket',
    ContentType: 'image/png',
    Body: buf,
    ContentEncoding: 'base64',
  }

  s3.upload(params, (error, data) => {
    if (error) {
      console.log(error)

    }

    console.log(String(data.Location))
    imageUrl = String(data.Location)
    console.log('Here1', imageUrl)
    const filter = { _id: ObjectID(req.body._id) }
    const Mission = {
      $set: {
        type: req.body.type,
        key: req.body.key,
        summary: req.body.summary,
        writeup: req.body.writeup,
        image: req.body.image,
      },
    }
    updateMission(filter, Mission)
  })



  async function updateMission(filter, Mission) {
    const result = await mongo.Mission.updateMission(filter, Mission)
    res.json(result.result)
  }

})

router.delete('/', function (req, res) {
  const filter = { _id: ObjectID(req.body._id) }
  async function deleteMission() {
    const result = await mongo.Mission.deleteMission(filter)
    res.json(result)
  }
  deleteMission()
})

module.exports = router
