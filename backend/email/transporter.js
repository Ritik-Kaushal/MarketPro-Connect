const nodemailer = require("nodemailer");
const path = require("path");
const hbs = require("nodemailer-express-handlebars");

let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER,
    port: process.env.EMAIL_PORT,
    secure: true,
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const options = {
    viewEngine: {
        extName: ".handlebars",
        partialsDir: path.resolve("./templates"),
        defaultLayout: false,
    },
    viewPath: path.resolve("./templates"),
    extName: ".handlebars",
};

transporter.use("compile", hbs(options));

module.exports = { transporter };