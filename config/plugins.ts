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
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          s3Options: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
            region: env('ap-south-1'),
            params: {
              ACL: 'public-read',
              Bucket: 'kofuku-cms-bucket',
            },
          },
        },
      },
    },
    graphql: {
      enabled: true,
      config: {
        playgroundAlways: false,
        defaultLimit: 100,
        maxLimit: -1,
      },
    },
  });