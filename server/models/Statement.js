
class Statement {
  constructor(db) {
    this.collection = db.collection('statement')
  }
  async getAll() {
    const toReturn = await this.collection.find({})
    return toReturn
  }
  async setStatement(document) {
    const toReturn = await this.collection.insertOne(document)
    return toReturn
  }
  async updateStatement(filter, document) {
    const toReturn = await this.collection.updateOne(filter, document)

    return toReturn
  }
  async deleteStatement(document) {
    const toReturn = await this.collection.deleteOne(document)

    return toReturn
  }
}
module.exports = Statement