const app = require("./app");
require("dotenv").config();
const swaggerDocs = require("../swagger"); 

const PORT = process.env.PORT || 7500;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
    swaggerDocs(app, PORT);
});
