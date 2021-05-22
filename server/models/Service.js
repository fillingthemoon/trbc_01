
class Service {
  constructor(db) {
    this.collection = db.collection('services')
  }
  async getAll() {
    const newService = await this.collection.find({})
    return newService
  }
  async setService(document) {
    const toReturn = await this.collection.insertOne(document)
    return toReturn
  }
  async updateService(filter, document) {
    const toReturn = await this.collection.updateOne(filter, document)

    return toReturn
  }
  async deleteService(document) {
    const toReturn = await this.collection.deleteOne(document)

    return toReturn
  }
}
module.exports = Service