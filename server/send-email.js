const nodemailer = require('nodemailer');

const conf = require('./conf.taxi');

let transporter = nodemailer.createTransport({
  service: conf.email.service,
    auth: {
      user: conf.email.user,
      pass: conf.email.password || process.env.EMAILPASS
    },
    tls: {'rejectUnauthorized': false}
});


function sendMail(options) {
  let mailOptions = {
    from: conf.email.from, // sender address
    to: options.to || conf.email.to, // list of receivers
    subject: conf.email.subject, // Subject line
    text: options.text || '', // plain text body
    html: options.html || '' // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.error(error);
    }
  });
}

module.exports = sendMail;

