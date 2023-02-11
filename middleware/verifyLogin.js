module.exports = (logedIn) => {
  return (req, res, next) => {
    const user = req.isLoggedIn;

    if (user !== logedIn) {
      return res.status(403).json({
        status: false,
        message: "you are not authorized",
      });
    }

    next();
  };
};
