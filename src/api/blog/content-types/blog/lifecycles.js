
  
module.exports = {
  lifecycles: {
   afterCreate(event) {
    console.log("[Lifecycle][AfterCrete]", event);
  }
  }
}