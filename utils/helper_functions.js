const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');

const encryptPassword = async(password) => {
    try{
        const passwordHash = await bcrypt.hash(password, 10) // 10 refers to number of rounds
        return passwordHash
    }
    catch(error){
        throw error
    }
}

const isPasswordSame = async (password, passwordHash) => {
    console.log('password', password, passwordHash.replace(/\$/g, '\\$'));
    try {
        const isMatch = await bcrypt.compare(password, passwordHash.trim());
        console.log('password compare:', isMatch);
        return isMatch;
    } catch (error) {
        console.error('Error comparing password:', error);
        // Handle the error appropriately (e.g., return false or throw a specific error)
        return false; // Example handling
    }
};

const createToken = (user) => {
    const user_id = {
        id: user.id,
        username: user.username,
        name: user.name,
    }
    const token = jwt.sign(user_id, process.env.SECRET_KEY)
    return token
}

const createUserName = (mail) => {
    return mail.replace('@gmail.com','')
}

const getUserFromToken = (token) => {
    const user = jwt.verify(token, process.env.SECRET_KEY)
    return user
}
const sendEmail = (mail) =>{
    

// Create a transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'codeketchofficial@gmail.com', // your Gmail account
        pass: 'hixu cssr zplm qvyc', // your Gmail app password
    },
});

// Setup email data
let mailOptions = {
    from: 'codeketchofficial@gmail.com', // sender address
    to: mail, // list of receivers
    subject: 'Hello', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});

}

module.exports = {
    encryptPassword,
    isPasswordSame,
    createToken,
    getUserFromToken,
    createUserName,
    sendEmail

}