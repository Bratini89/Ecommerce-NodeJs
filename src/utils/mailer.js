// importar nodemailer

const nodemailer = require("nodemailer");
// la contrasena de la aplicacion
require("dotenv").config();

// creamos el transportador

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: "465",
    secure: true,
    auth: {
        user: "bratiniiiii@gmail.com",
        pass: process.env.G_PASSWORD,
    },

});

module.exports = transporter;
