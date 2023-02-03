const { createUserServices } = require("../services/user.services")

module.exports.createUser = async (req,res,next) => {
    try {
        const result = await createUserServices(req.body)
        res.status(200).json({
            status:true,
            message:"user create success"
        })
    } catch (error) {
        res.status(400).json({
            status:false,
            message:"user can't create",
            error:error
        })
    }
}