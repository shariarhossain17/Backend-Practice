const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

exports.sendMail = async (data) => {
  var options = {
    auth: {
      api_key:
        "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",
    },
  };
  const mailer = nodemailer.createTransport(sendGridTransport(options));

  const email = {
    to: ["shariarhossain@procorp.ltd"],
    from: "shariarhossain23@gmail.com",
    subject: "Hi there whatspp",
    text: "Awesome sauce",
    html: "<b>please verify</b>",
  };

  mailer.sendMail(email, function (err, res) {
    if (err) {
      console.log(err);
    }

    console.log(res);
  });
};
