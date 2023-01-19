const Product = require("../db/db")



exports.fetchProductServices = async () => {
    const result = Product.fetchAll();
    return result
}