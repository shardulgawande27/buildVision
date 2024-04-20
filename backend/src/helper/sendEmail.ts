import nodemailer from 'nodemailer';

export const sendEmail = async (apiKey: string, userEmail: string, subject: string, text: string) => {

    console.log("inside the emailer >>>>>>>>>>>>>>>")

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Specify your SMTP host
        port: 2525, // Specify your SMTP port
        secure: false, // false for TLS - as a boolean not string - if you don't use it
        auth: {
            user: 'buildvision07@gmail.com', // Specify your SMTP username
            pass: "47E8580E00A21BC79CAB38FCA9D2C19264D900BC43ECCADE61A7F25F11911262AE4095FC038C0445FCF355370961E896" // Specify your SMTP API key
        }
    });

    const mailOptions = {
        from: 'buildvision07@gmail.com',
        to: 'harshal.world07@gmail.com',
        subject: "Hello",
        text: "Hello"
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};