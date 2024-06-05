module.exports = {
    async afterCreate(event:any) {
      try {
        const { result } = event;
        console.log("event", event)
        console.log("result", result)
      } catch (error) {
        console.error(error,'error');
      }
    }
  };
  