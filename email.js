const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "8b67fafd698e12",
        pass: "ba089be405d257"
    }
};

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log(info);
            return info.response;
        }
    })
};


let email_data = {
    from: 'rudghks0981@gmail.com',
    to: 'rudghks09@naver.com',
    subject: '테스트 메일',
    text : 'node.js 하자'
}
send(email_data)