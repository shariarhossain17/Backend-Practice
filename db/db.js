const db = require("../db/database");

class Product {
  constructor(book, price, description, id) {
    (book = this.book),
      (price = this.price),
      (description = this.description),
      (id = this.id);
  }

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }
}

module.exports = Product;
