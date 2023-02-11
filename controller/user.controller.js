const { fetchProductServicesById } = require("../services/product.services");
const {
  createUserService,
  getUserServiceByEmail,
  getCartService,
} = require("../services/user.services");

module.exports.createUser = async (req, res, next) => {
  try {
    const result = await createUserService(req.body);
    req.session.isLogged = true;
    res.status(200).json({
      status: true,
      message: {
        data: result,
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

module.exports.signIn = async (req, res, next) => {
  try {
    console.log(req.session);
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        status: false,
        message: "please provide your email and passwords",
      });
    }

    const user = await getUserServiceByEmail(email);
    if (!user) {
      return res.status(403).json({
        status: false,
        message: "please crate account",
      });
    }

    const isPasswordValid = await user.comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        status: false,
        message: "password incorrect",
      });
    }

    req.session.isLogged = true;

    const { password: pwd, ...others } = user.toObject();

    
    res.status(200).json({
      status: true,
      message: "login success",
      data: {
        others,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "something went wrong ",
      error: error,
    });
  }
};
