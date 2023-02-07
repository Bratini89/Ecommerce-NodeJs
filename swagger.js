const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const options = {
  apis: [
    "./src/routes/auth.routes.js",
    "./src/models/users.js",
    "./src/routes/car.routes.js",
    "./src/models/car.js",
    "./src/routes/order.routes.js",
    "./src/models/order.js",
    "./src/routes/product.routes.js",
    "./src/models/product.js",
  ],
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Proyecto Ecommerce",
      version: "0.0.9",
      description: "API para Ecommerce Compras y Ventas",
    },
  },
};

// generar una especificacion en el json para la documentacion
const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  // generar la ruta donde se mostrara la documentacion
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(
    `La documentacion esta disponible ${process.env.URL}:${port}/api/v1/docs`
  );
};

module.exports = swaggerDocs;
