class Team {
  constructor(db) {
    this.collection = db.collection('teams')
  }
  async getAll() {
    const toReturn = await this.collection.find({})
    return toReturn
  }
  async setTeam(document) {
    const toReturn = await this.collection.insertOne(document)
    return toReturn
  }
  async updateTeam(filter, document) {
    const toReturn = await this.collection.updateOne(filter, document)

    return toReturn
  }
  async deleteTeam(document) {
    const toReturn = await this.collection.deleteOne(document)

    return toReturn
  }
}
module.exports = Team
