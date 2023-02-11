const { fetchProductServicesById } = require("../services/product.services");
const {
  createUserService,
  getUserServiceByEmail,
  getCartService,
} = require("../services/user.services");

module.exports.createUser = async (req, res, next) => {
  try {
    const result = await createUserService(req.body);
    console.log(req.session)
    req.session.isLogged = true
    res.status(200).json({
      status: true,
      message: {
        data: result,
        token: "dfjerueir4o450itor90",
      },
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "user can't create",
      error: error,
    });
  }
};

// post cart

module.exports.postCart = async (req, res, next) => {
  try {
    const product = await fetchProductServicesById(req.body.productId);
    const user = await getUserServiceByEmail(req.body.email);

    const cart = await user.addToCart(product);

    res.status(200).json({
      status: true,
      message: "cart added",
      data: cart,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "user can't create",
      error: error,
    });
  }
};

module.exports.getCart = async (req, res, next) => {
  try {
    const cart = await getCartService(req.body.id);

    res.status(200).json({
      status: true,
      message: "cart get success",
      cart: cart,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't find cart",
      error: error,
    });
  }
};

module.exports.removeCart = async (req, res, next) => {
  try {
    const user = await getUserServiceByEmail(req.body.email);

    const cart = await user.removeCart(req.body.productId);

    res.status(200).json({
      status: true,
      message: "remove cart",
      data: cart,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "cant't remove cart",
      error: error,
    });
  }
};
