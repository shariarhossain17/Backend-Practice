const { fetchProductServices, postProductService, fetchProductServicesById } = require("../services/product.services");

module.exports.fetchProducts = async (req, res) => {
  try {
    const product = await fetchProductServices();

    res.status(200).json({
      status: true,
      message: "data get success",
      data: product[0],
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't get products data",
      error: error,
    });
  }
};



module.exports.postProduct = async (req,res,next) => {
    try {
        const data = req.body;
        const result = await postProductService(data);

        res.status(200).json({
            status:true,
            message:"post success",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:false,
            message:"can't create data",
            error:error
        })
    }
}
module.exports.fetchProductById = async (req,res,next) => {
    try {
        const result = await fetchProductServicesById(req.params.id);
      if(result[0].length === 0){
        return res.status(400).json({
          status:false,
          message:"can't find data"
        })
      }

      console.log(result);
        res.status(200).json({
            status:true,
            message:"post success",
            data:result[0][0]
        })
    } catch (error) {
        res.status(400).json({
            status:false,
            message:"can't create data",
            error:error
        })
    }
}
