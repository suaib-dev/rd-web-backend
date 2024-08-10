const { Validator } = require('node-input-validator');
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "alfaenterprises04@gmail.com",
        pass: "infq ajki wvph hyux", // Use your generated App Password here
    },
});

const contectUs = async (req, res) => {
    try {
        const { email, name, phoneNumber, message } = req.body;
        const val = new Validator(req.body, {
            email: "required",
            phoneNumber: "required",
            name: "required",

        });
        const check = await val.check();

        if (!check) {
            return res.status(422).json({
                success: false,
                message: val.errors
            });
        }

        const info = await transporter.sendMail({
            from: email, // sender address (user's email)
            to: 'alfaenterprises04@gmail.com', // list of receivers (your email)
            subject: "Contoper query for modular box", // Subject line
            text: " you orp", // plain text body
            html: `<b>
                Name : ${name} <br> 
                email : ${email} <br> 
                phone Number : ${phoneNumber} <br> 
                Message : ${message} <br> 
            </b>`, // html body
        });

        return res.status(200).json({
            success: true,
            message: 'Email sent successfully!',
            response: info
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.toString()
        });
    }
}



const getquotation = async (req, res) => {
    try {
        const { email, name, phoneNumber, message, qty } = req.body;
        const val = new Validator(req.body, {
            email: "required",
            phoneNumber: "required",
            name: "required",
            qty: "required",

        });
        const check = await val.check();

        if (!check) {
            return res.status(422).json({
                success: false,
                message: val.errors
            });
        }

        const info = await transporter.sendMail({
            from: email, // sender address (user's email)
            to: 'alfaenterprises04@gmail.com', // list of receivers (your email)
            subject: "Customer query for modular box", // Subject line
            text: " you orp", // plain text body
            html: `<b>
                Name : ${name} <br> 
                email : ${email} <br> 
                phone Number : ${phoneNumber} <br> 
                Quanity : ${qty} <br> 
                Message : ${message} <br> 
            </b>`, // html body
        });

        return res.status(200).json({
            success: true,
            message: 'Email sent successfully!',
            response: info
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.toString()
        });
    }
}

module.exports = {
    contectUs,
    getquotation
}
