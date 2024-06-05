
  
module.exports = {
  lifecycles: {
   afterCreate(event:any) {
    console.log("[Lifecycle][AfterCrete]", event);
  }
  }
}