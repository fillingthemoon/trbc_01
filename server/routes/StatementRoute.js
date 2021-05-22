const { ObjectID } = require('bson')
const express = require('express')
const router = express.Router()
const mongo = require('../Mongo')

router.get('/', (req, res) => {

  async function getAll() {
    const cursor = await mongo.Statement.getAll()
    cursor.toArray().then((i) => {
      res.json(i)
    })
  }
  getAll()
})

router.post('/', (req, res) => {
  const Statement = {
    statement: req.body.statement,
    statementOrder: req.body.statementOrder
  }
  async function setStatement() {
    const result = await mongo.Statement.setStatement(Statement)
    res.json(result.ops)
  }
  setStatement()
})


router.put('/', (req, res) => {
  console.log(req.body)


  const filter = { _id: ObjectID(req.body._id) }
  const Statement = {
    $set: {
      statement: req.body.statement,
      statementOrder: req.body.statementOrder
    }
  }

  async function updateStatement() {
    const result = await mongo.Statement.updateStatement(filter, Statement)
    res.json(result.result)
  }
  updateStatement()
})
router.delete('/', function (req, res) {
  console.log(req.body._id)
  const filter = { _id: ObjectID(req.body._id) }
  async function deleteStatement() {
    const result = await mongo.Statement.deleteStatement(filter)
    res.json(result)
  }
  deleteStatement()

})
module.exports = router
