import axios from 'axios';

module.exports =  {
  async afterCreate(event) {
    try {
      const { result, params } = event;
      console.log("result", result);
      
      const { Title, coverImg, slug, blog_categories } = result;
      console.log({ Title, coverImg, slug, blog_categories });
      let url = "";
      if(coverImg){
        url = coverImg.url
      }     
      let categorySlugs = [];
      if(blog_categories.length){
        blog_categories.map(bc => categorySlugs.push(bc.slug))
      } 
      const endpoint = process.env.GRAPHQL_BACKEND_ENDPOINT;
      console.log(endpoint)
      const headers = {
        "content-type": "application/json",
      };
      const graphqlQuery = {
        query: `
          mutation notifyFromStrapi($coverimg: String, $title: String, $slug: String, $categorySlugs: [String]) {
            notifyFromStrapi(coverimg: $coverimg, title: $title, slug: $slug, categorySlugs: $categorySlugs) {
              message
              success
            }
          }
        `,
        variables: { coverimg: url, title: Title, slug, categorySlugs }
      };
      console.log(graphqlQuery)
      const response = await axios.post(endpoint, graphqlQuery, { headers });
      console.log(response.data);
      console.log(response.status);
    } catch (error) {
      console.error('Error:', error);
    }
  }
};