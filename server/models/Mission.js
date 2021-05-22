
class Mission {
  constructor(db) {
    this.collection = db.collection('mission')
  }
  async getAll() {
    const newMission = await this.collection.find({})
    return newMission
  }
  async setMission(document) {
    const toReturn = await this.collection.insertOne(document)
    return toReturn
  }
  async updateMission(filter, document) {
    const toReturn = await this.collection.updateOne(filter, document)

    return toReturn
  }
  async deleteMission(document) {
    const toReturn = await this.collection.deleteOne(document)

    return toReturn
  }
}
module.exports = Mission