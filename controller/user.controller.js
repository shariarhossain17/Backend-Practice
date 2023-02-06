const { fetchProductServicesById } = require("../services/product.services");
const { createUserService, getUserServiceByEmail, getCartService } = require("../services/user.services");

module.exports.createUser = async (req, res, next) => {
  try {
    const result = await createUserService(req.body);
    res.status(200).json({
      status: true,
      message: "user create success",
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

module.exports.postCart = async (req,res,next) => {
  try {
    const product = await fetchProductServicesById(req.body.productId)
    const user = await getUserServiceByEmail(req.body.email)

    const cart = await user.addToCart(product);
    

    res.status(200).json({
        status:true,
        message:"cart added",
        data:cart
    })

  } catch (error) {
    res.status(400).json({
      status: false,
      message: "user can't create",
      error: error,
    });
  }
};


module.exports.getCart = async (req,res,next) => {
    try{
        const cart = await getCartService(req.body.id)

        res.status(200).json({
            status:true,
            message:"cart get success",
            cart:cart
        })
    }
    catch(error) {
        res.status(400).json({
            status: false,
            message: "can't find cart",
            error: error,
          });
    }
}
