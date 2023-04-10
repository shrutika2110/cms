module.exports={
    async afterCreate(event:any){
         const {result} = event;
         const sgMail = require('@sendgrid/mail')
         sgMail.setApiKey(process.env.SENDGRID_API_KEY)
         const msg = {
           to: result.email, // Change to your recipient
           from: 'newsletter@kofuku.com', // Change to your verified sender
           template_id: 'd-cd09b3a3e46f4472a89f596ca7b060f5', //Change Template
         }
         sgMail
           .send(msg)
           .then(() => {
             console.log('Email sent')
             
           })
           .catch((error) => {
             console.error(error.response.body)
           })
     }
 }