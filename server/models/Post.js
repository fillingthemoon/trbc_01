
class Post {
  constructor(db) {
    this.collection = db.collection('posts')
  }
  async getPost() {
    const newPost = await this.collection.find({})
    return newPost
  }
}
module.exports = Post