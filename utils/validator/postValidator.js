const { body, validationResult } = require("express-validator");

exports.resultsValidator = (req) => {
  
};

exports.postValidate = () => {
  return [
    body("title")
      .notEmpty()
      .withMessage("title is required")
      .trim()
      .isLength({ min: 5 }),
    body("content").notEmpty().withMessage("content required").trim(),
    body("author").notEmpty().withMessage("author field empty").trim(),
  ];
};
