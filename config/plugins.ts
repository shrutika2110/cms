module.exports = ({ env }) => ({
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom:  'newsletter@kofuku.com', //Sender Verified Email
        defaultReplyTo:  'newsletter@kofuku.com', //Sender Verified Email
      },
    },
  });