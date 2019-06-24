const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aayushgoyal9507@gmail.com',
        subject: 'Welcome to my App',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })

}

const cancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aayushgoyal9507@gmail.com',
        subject: 'Sorry to see you go',
        text: `Sad to see you go, ${name}. PLease provide feedback on how we could have made your experience better.`
    })

}

module.exports = {
    sendWelcomeEmail,
    cancelEmail
}
