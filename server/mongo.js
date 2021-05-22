const { MongoClient } = require('mongodb')
const Post = require('./models/Post')
const Team = require('./models/Team')
const Outreach = require('./models/Outreach')
const Service = require('./models/Service')
const Vision = require('./models/Vision')
const Statement = require('./models/Statement')
const Mission = require('./models/Mission')
require('dotenv').config()

class Mongo {
  constructor() {
    const url = process.env.DB_CONNECTION

    this.client = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    this.db
    this.Post
    this.Team
    this.Outreach
    this.Service
    this.Vision
    this.Statement
    this.Mission
  }
  async init() {
    // Connect the client to the server
    await this.client.connect()
    this.db = this.client.db('trbc')
    this.Post = new Post(this.db)
    this.Team = new Team(this.db)
    this.Outreach = new Outreach(this.db)
    this.Service = new Service(this.db)
    this.Vision = new Vision(this.db)
    this.Statement = new Statement(this.db)
    this.Mission = new Mission(this.db)
    // Establish and verify connection

    console.log('Connected successfully to server')
  }
}

module.exports = new Mongo()
