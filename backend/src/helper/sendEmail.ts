import nodemailer, { Transporter} from 'nodemailer';
require("dotenv").config()

export const sendEmail = async ( userEmail: string, subject: string, text: string) => {

    
    console.log(process.env.SMTP_EMAIL, process.env.SMTP_PASSWORD, "env data >>>>>>>>>>>>>>>")

    const transporter:Transporter = nodemailer.createTransport({
        host: 'smtp.elasticemail.com', // Specify your SMTP host
        port: 587, // Specify your SMTP port
        secure: false, // false for TLS - as a boolean not string - if you don't use it
        auth: {
            user: process.env.SMTP_EMAIL, // Specify your SMTP username
            pass: process.env.SMTP_PASSWORD // Specify your SMTP API key
        }
    });


    

 
    const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: userEmail,
        subject: subject,
        text: text
    };

    console.log(mailOptions)

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};