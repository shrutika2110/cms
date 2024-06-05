const axios = require('axios');

module.exports = {
    async afterCreate(event:any) {
      try {
        const { result } = event;
        console.log("event", event)
        console.log("result", result)
        const { title, coverimg, state} = result
        console.log({title, coverimg, state})
        const endpoint = "http://localhost:8080/v1/graphql"
        const headers = {
          "content-type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwiWC1IYXN1cmEtVXNlci1JZCI6IjJlMGFjZDcxLTJmZGMtNDljMi1iMWMwLTI0NGYxODcxNDZjYSJ9LCJpYXQiOjE3MTM5NTEyOTMsImV4cCI6MTc0NTA1NTI5M30.KHKKqF52O7v9Xb7nPbuM4KeegitKzldPeuJeEryvL3s"
        };
        const graphqlQuery = {
          "operationName": "notifyFromStrapi",
          "query": `mutation MyMutation($coverimg: String , $state: String , $title: String ) {
            notifyFromStrapi(coverimg: $coverimg, state: $state, title: $title) {
              message
              success
            }
          }
          `,
          "variables": {coverimg, state, title}
      };
      const response = await axios.post(endpoint, {headers, data: graphqlQuery})
      console.log(response.data)
      console.log(response.errors)
      } catch (error) {
        console.error(error,'error');
      }
    }
  };
  