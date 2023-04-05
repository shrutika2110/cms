module.exports={
    async afterCreate(event:any){
         const {result} = event;
         const sgMail = require('@sendgrid/mail')
         sgMail.setApiKey(process.env.SENDGRID_API_KEY)
         const msg = {
           to: result.email, // Change to your recipient
           from: 'email.gmail.com', // Change to your verified sender
           subject: 'From Armani',
           template_id: 'd-7b88b835fc6c4af7aaf9c2f8650d14dc', //Change Template
         }
         sgMail
           .send(msg)
           .then(() => {
             console.log('Email sent')
             
           })
           .catch((error) => {
             console.error(error.response.body,"???")
           })
     }
 }