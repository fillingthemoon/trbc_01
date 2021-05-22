const { ObjectID } = require('bson')
const express = require('express')
const router = express.Router()
const mongo = require('../Mongo')

router.get('/', (req, res) => {
  async function getAll() {
    const cursor = await mongo.Vision.getAll()
    cursor.toArray().then((i) => {
      res.json(i)
    })
  }
  getAll()
})

router.post('/', (req, res) => {
  const vision = {
    vision: req.body.vision,
    mission: req.body.mission,
    image: req.body.image,
  }
  async function setVision() {
    const result = await mongo.Vision.setVision(vision)
    res.json(result.ops)
  }
  setVision()
})

router.put('/', (req, res) => {
  console.log(req.body)

  const filter = { _id: ObjectID(req.body._id) }
  const vision = {
    $set: {
      vision: req.body.vision,
      mission: req.body.mission,
      image: req.body.image,
    },
  }

  async function updateVision() {
    const result = await mongo.Vision.updateVision(filter, vision)
    res.json(result.result)
  }
  updateVision()
})
router.delete('/', function (req, res) {
  console.log(req.body._id)
  const filter = { _id: ObjectID(req.body._id) }
  async function deleteVision() {
    const result = await mongo.Vision.deleteVision(filter)
    res.json(result)
  }
  deleteVision()
})
module.exports = router

