const express = require("express");
const path = require("path");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const orderDocument = YAML.load(path.join(__dirname, "../orders.yaml"));
const recipeDocument = YAML.load(path.join(__dirname, "../recipe.yaml"));
const storeDocument = YAML.load(path.join(__dirname, "../store.yaml"));

const app = express();
app.use(cors());

app.use(express.json());

app.use("/store/document", swaggerUi.serveFiles(storeDocument, {}), swaggerUi.setup(storeDocument));

app.use("/recipe/document", swaggerUi.serveFiles(recipeDocument, {}), swaggerUi.setup(recipeDocument));

app.use("/orders/document", swaggerUi.serveFiles(orderDocument, {}), swaggerUi.setup(orderDocument));

module.exports = app;
