
class Vision {
  constructor(db) {
    this.collection = db.collection('vision')
  }
  async getAll() {
    const toReturn = await this.collection.find({})
    return toReturn
  }
  async setVision(document) {
    const toReturn = await this.collection.insertOne(document)
    return toReturn
  }
  async updateVision(filter, document) {
    const toReturn = await this.collection.updateOne(filter, document)

    return toReturn
  }
  async deleteVision(document) {
    const toReturn = await this.collection.deleteOne(document)

    return toReturn
  }
}
module.exports = Vision