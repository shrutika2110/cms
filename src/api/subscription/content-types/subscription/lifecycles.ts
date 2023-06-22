const sgMail = require('@sendgrid/mail');

module.exports = {
  async afterCreate(event:any) {
    try {
      const { result } = event;

      const recipientEmail = result.subscription_email;

      if (!recipientEmail) {
        throw new Error('Recipient email address is missing');
      }

      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      const msg = {
        to: recipientEmail, // Change to your recipient
        from: 'newsletter@kofuku.com', // Change to your verified sender
        template_id: 'd-cd09b3a3e46f4472a89f596ca7b060f5', // Change Template
      };

      await sgMail.send(msg);
      console.log('Email sent',msg);
    } catch (error) {
      console.error(error,'error');
    }
  }
};
