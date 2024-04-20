import nodemailer, { Transporter} from 'nodemailer';

export const sendEmail = async (apiKey: string, userEmail: string, subject: string, text: string) => {

    console.log("inside the emailer >>>>>>>>>>>>>>>")

    

    const transporter:Transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Specify your SMTP host
        port: 456, // Specify your SMTP port
        secure: false, // false for TLS - as a boolean not string - if you don't use it
        auth: {
            user: 'shardulgawande27@gmail.com', // Specify your SMTP username
            pass: "nsmomgljgxfkdrqq" // Specify your SMTP API key
        }
    });

    console.log(transporter, "transporter >>>>>>>>>>>>>")

    const mailOptions = {
        from: 'shardulgawande27@gmail.com',
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