const {
    ApplicationConfig,
    ApplicationClient,
  } = require("fdk-client-javascript");


  const config_jio = new ApplicationConfig({
    applicationID: "64afff6bdfc791133b41c189",
    applicationToken: "j876PycvV",
    domain: "https://api.jiox1.de/"
  });

  const applicationClient_jio = new ApplicationClient(config_jio);

  async function getProducts() {
    try {
      const product_details = await applicationClient_jio.catalog.getProducts();
      console.log(product_details);
    } catch (err) {
      console.log(err);
    }
  }
  getProducts();