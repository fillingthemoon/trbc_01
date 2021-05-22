
class Outreach {
  constructor(db) {
    this.collection = db.collection('outreach')
  }
  async getAll() {
    const newOutreach = await this.collection.find({})
    return newOutreach
  }
  async setOutreach(document) {
    const toReturn = await this.collection.insertOne(document)
    return toReturn
  }
  async updateOutreach(filter, document) {
    const toReturn = await this.collection.updateOne(filter, document)

    return toReturn
  }
  async deleteOutreach(document) {
    const toReturn = await this.collection.deleteOne(document)

    return toReturn
  }
}
module.exports = Outreach