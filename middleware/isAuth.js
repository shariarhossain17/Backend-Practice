module.exports = (req,res,next) => {
    if(!req.session.isLogged){
        return res.status(401).json({
            status:false,
            message:"unauthorized"
        })
    }

    next()
}