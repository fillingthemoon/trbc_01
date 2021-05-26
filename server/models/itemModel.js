const mongoose = require('mongoose')

const linkSchema = {
  path: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
}

const detailsSchema = {
  date: {
    type: Date,
  },
  time: {
    type: String,
  },
  location: {
    type: String,
  },
  person: {
    type: String,
  },
}

const itemSchema = new mongoose.Schema({
  page: {
    type: String,
    required: true,
  },
  sectionName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
  },
  link: {
    type: linkSchema,
  },
  details: {
    type: detailsSchema,
  }
})

itemSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item