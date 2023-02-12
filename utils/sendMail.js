const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

exports.sendMail = async (user,token) => {

  console.log(token);
  var options = {
    auth: {
      api_key:
        "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",
    },
  };
  const mailer = nodemailer.createTransport(sendGridTransport(options));

  const email = {
    to: "shariarhossain23@gmail.com",
    from: "shariarhossain@procorp.ltd",
    subject: "Hi there whatspp",
    text: `your reset code is ${token}`,
    html: "<b>please reset</b>",
  };

  mailer.sendMail(email, function (err, res) {
    if (err) {
      console.log(err);
    }

    console.log(res);
  });
};
