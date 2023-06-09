const nodemailer = require("nodemailer");
require("dotenv").config();

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "romanhnatiak@meta.ua",
    pass: process.env.META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "romanhnatiak@meta.ua" };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;




// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const {META_PASSWORD} = process.env;

// const nodemailerConfig = {
//     host: "smtp.meta.ua",
//     port: 465,
//     secure: true,
//     auth: {
//         user: "romanhnatiak@meta.ua",
//         pass: META_PASSWORD,
//     }
// };

// const transport = nodemailer.createTransport(nodemailerConfig)

// const email = {
//     to: "egsfortgg67@gmail.com",
//     from: "romanhnatiak@meta.ua",
//     subject: "Test email",
//     html: "<p><strong>Test email</strong> from localhost:3000</p>"
// };

// transport.sendMail(email)
//     .then(() => console.log("Email send success"))
//     .catch(error => console.log(error.message));




// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const nodemailerConfig = {
//   host: "smtp.meta.ua",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "serhii.ryabko@meta.ua",
//     pass: process.env.META_PASSWORD,
//   },
// };

// const transport = nodemailer.createTransport(nodemailerConfig);

// const sendEmail = async (data) => {
//   const email = { ...data, from: "serhii.ryabko@meta.ua" };
//   await transport.sendMail(email);
//   return true;
// };

// module.exports = sendEmail;