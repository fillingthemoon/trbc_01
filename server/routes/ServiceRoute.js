const { ObjectID } = require('bson')
const express = require('express')
const router = express.Router()
const mongo = require('../Mongo')

router.get('/', (req, res) => {
  async function getAll() {
    const cursor = await mongo.Service.getAll()
    cursor.toArray().then((i) => {
      res.json(i)
    })
  }
  getAll()
})

router.post('/', (req, res) => {
  const service = {
    title: req.body.title,
    congregation: req.body.congregation,
    description: req.body.description,
    image: req.body.image,
    time: req.body.time,
    location: req.body.location,
  }
  async function setService() {
    const result = await mongo.Service.setService(service)
    res.json(result.ops)
  }
  setService()
})

router.put('/', (req, res) => {
  console.log(req.body)

  const filter = { _id: ObjectID(req.body._id) }
  const service = {
    $set: {
      title: req.body.title,
      congregation: req.body.congregation,
      description: req.body.description,
      image: req.body.image,
      time: req.body.time,
      location: req.body.location,
    },
  }

  async function updateService() {
    const result = await mongo.Service.updateService(filter, service)
    res.json(result.result)
  }
  updateService()
})
router.delete('/', function (req, res) {
  console.log(req.body._id)
  const filter = { _id: ObjectID(req.body._id) }
  async function deleteService() {
    const result = await mongo.Service.deleteService(filter)
    res.json(result)
  }
  deleteService()
})
module.exports = router
