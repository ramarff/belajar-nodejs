var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ramafajar805@gmail.com',
        pass: 'BAGUVIX645'
    }
});

var mailOptions = {
    from: 'ramafajar805@gmail.com',
    to: 'saymursyidah@gmail.com',
    subject: 'Sending Email using Nodejs',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (err, info) => {
    // if (err) throw err;
    // console.log('Email sent: ' + info.response);
});