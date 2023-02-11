module.exports = async (req, res, next) => {
  try {
    console.log("hello")
    res.setHeader('isLoggedIn', 'true');
    next();
  } catch (err) {
    res.status(400).json({
      message: "unauthorized",
    });
  }
};
