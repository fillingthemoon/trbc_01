const express = require('express')
const router = express.Router()

const mongo = require('../Mongo')

router.get('/', (req, res) => {

  async function getPost() {
    const cursor = await mongo.Posts.getPost()

    cursor.toArray().then((i) => {

      res.json(i)
    })
  }

  getPost()

})

// router.post("/", (req, res) => {
//   const post = new Post({
//     title: req.body.title,
//     description: req.body.description,
//   });

//   post
//     .save()

//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });
module.exports = router
