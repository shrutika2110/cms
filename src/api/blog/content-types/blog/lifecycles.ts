import axios from 'axios';

module.exports =  {
  async afterCreate(event) {
    try {
      const { result, params } = event;
      console.log("result", result);
      
      const { Title, coverImg } = result;
      console.log({ Title, coverImg });
      
      const endpoint = process.env.GRAPHQL_BACKEND_ENDPOINT;
      const headers = {
        "content-type": "application/json",
      };
      const graphqlQuery = {
        query: `
          mutation notifyFromStrapi($coverimg: String, $state: String, $title: String) {
            notifyFromStrapi(coverimg: $coverimg, state: $state, title: $title) {
              message
              success
            }
          }
        `,
        variables: { coverimg: coverImg, title: Title }
      };

      const response = await axios.post(endpoint, graphqlQuery, { headers });
      console.log(response.data);
      console.log(response.status);
    } catch (error) {
      console.error('Error:', error);
    }
  }
};