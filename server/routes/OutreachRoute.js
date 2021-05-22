const { ObjectID } = require('bson')
const express = require('express')
const router = express.Router()
const mongo = require('../Mongo')

router.get('/', (req, res) => {

  async function getAll() {
    const cursor = await mongo.Outreach.getAll()
    cursor.toArray().then((i) => {
      res.json(i)
    })
  }
  getAll()
})

router.post('/', (req, res) => {
  const outreach = {
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    time: req.body.time,
    location: req.body.location,
    inCharge: req.body.inCharge,
  }
  async function setOutreach() {
    const result = await mongo.Outreach.setOutreach(outreach)
    res.json(result.ops)
  }
  setOutreach()
})


router.put('/', (req, res) => {
  console.log(req.body)

  const filter = { _id: ObjectID(req.body._id) }
  const outreach = {
    $set: {
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      time: req.body.time,
      location: req.body.location,
      inCharge: req.body.inCharge,
    }
  }

  async function updateOutreach() {
    const result = await mongo.Outreach.updateOutreach(filter, outreach)
    res.json(result.result)
  }
  updateOutreach()
})
router.delete('/', function (req, res) {
  console.log(req.body._id)
  const filter = { _id: ObjectID(req.body._id) }
  async function deleteOutreach() {
    const result = await mongo.Outreach.deleteOutreach(filter)
    res.json(result)
  }
  deleteOutreach()

})
module.exports = router
