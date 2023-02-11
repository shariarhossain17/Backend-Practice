module.exports = (req,res,next) => {
    console.log(req.session.isLogged)
    if(!req.session.isLogged){
        return res.status(401).json({
            status:false,
            message:"unauthorized"
        })
    }

    next()
}