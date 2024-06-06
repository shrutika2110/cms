import axios from 'axios';

module.exports =  {
  async beforeCreate(event) {
    try {
      const { result, params } = event;
      console.log("event", event);
      console.log({params})
      console.log("result", result);
      
      const { title, coverimg, state } = result;
      console.log({ title, coverimg, state });
      
      const endpoint = "https://kofuku-be.blr0.geekydev.com/v1/graphql";
      const headers = {
        "content-type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwiWC1IYXN1cmEtVXNlci1JZCI6IjJiODYxMDg0LTM4MDktNDM4Yy05OWMyLTczZDc0ZWM2OTUwMCJ9LCJpYXQiOjE3MTM1MjM1MDcsImV4cCI6MTc0NDYyNzUwN30.364txUyYnAAM6mEaNC7p42T8mN75iPYa7KOO6cvg4uk"
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
        variables: { coverimg, state, title }
      };

      const response = await axios.post(endpoint, graphqlQuery, { headers });
      console.log(response.data);
      console.log(response.status);
    } catch (error) {
      console.error('Error:', error);
    }
  }
};
