
const User = require("../models/user.model")

exports.createUserService = async (userData) => {
    const user = await User.create(userData);
    return user 
}

exports.getUserServiceByEmail = async (email) => {
    const user = await User.findOne({email});
    return user;
}

exports.getCartService = async (id) => {
    const result = await User.findById(id).populate("cart.items.productId")
    return result;
}
